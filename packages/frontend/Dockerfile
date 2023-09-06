# Using the latest LTS version of Node.js
FROM node:16

# Set the working directory for the monorepo
WORKDIR /secure-arc

# Copy the entire monorepo
COPY . .

# Install all dependencies of the monorepo
RUN yarn install --frozen-lockfile

# Change the working directory to frontend
WORKDIR /secure-arc/packages/frontend

# Build the frontend application
RUN yarn build

# Expose the default frontend port
EXPOSE 3000

# Start the frontend application
CMD [ "yarn", "start" ]
