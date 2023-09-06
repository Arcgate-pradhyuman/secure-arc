# Use the Node 16 base image
FROM node:16

# Set the working directory to the root of your monorepo
WORKDIR /backend

# Copy the entire monorepo into the image
COPY . .

# Install dependencies for the entire monorepo (or adjust as needed)
RUN yarn install --frozen-lockfile

# Expose port 4000 (assuming your service still runs on this port)
EXPOSE 4000

# If you still want to start the service in the backend directory, adjust the start command
CMD [ "yarn", "--cwd", "packages/backend", "start" ]
