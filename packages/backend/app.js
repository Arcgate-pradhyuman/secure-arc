var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require('body-parser');
const createApolloServer = require("./graphql/service/graphql.service");
const { expressMiddleware } = require("@apollo/server/express4");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRoutes = require('./routes/auth');



var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());


app.use("/", indexRouter);
app.use("/users", usersRouter);

var apolloServer; // Declare the variable in the outer scope

(async () => {
  try {
    apolloServer = createApolloServer(); // Assign a value inside the async function
    await apolloServer.start();
  } catch (error) {
    console.error("Error setting up Apollo Server:", error);
  }
})();

app.use("/graphql", (req, res, next) => {
  if (apolloServer) {
    expressMiddleware(apolloServer)(req, res, next);
  } else {
    next(); // Call next middleware if apolloServer is not ready yet
  }
});


// Routes
app.use('/auth', authRoutes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
