# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /express-server

# Copy package.json to the container
COPY package.json ./

# Set a custom Yarn registry
RUN yarn config set registry http://verdaccio:4873/

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Express.js server listens on (e.g., 5000)
EXPOSE 5000

# Start your Express.js application using the yarn start command
CMD ["yarn", "start"]
