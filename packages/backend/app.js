var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const createApolloServer = require('./graphql/service/graphql.service');
const { expressMiddleware } = require('@apollo/server/express4');

const swaggerUi = require('swagger-ui-express');

// Import the Swagger specifications and the routes
const specs = require('./swagger.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users.router');
const authRouter = require('./routes/auth.router');
const fileRouter = require('./routes/file.router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Use the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/file', fileRouter);

// apollo server connection
var apolloServer; // Declare the variable in the outer scope

(async () => {
  try {
    apolloServer = createApolloServer(); // Assign a value inside the async function
    await apolloServer.start();
  } catch (error) {
    console.error('Error setting up Apollo Server:', error);
  }
})();

app.use('/graphql', (req, res, next) => {
  if (apolloServer) {
    expressMiddleware(apolloServer)(req, res, next);
  } else {
    next(); // Call next middleware if apolloServer is not ready yet
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
