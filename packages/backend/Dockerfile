# Use the Node 16 base image
FROM node:16

# Set the working directory to the root of your monorepo
WORKDIR /secure-arc

# Copy the rest of your monorepo into the image
COPY . .

# Install dependencies for the entire monorepo (or adjust as needed)
RUN yarn install --frozen-lockfile

# Expose port 5000 (assuming your service runs on this port)
EXPOSE 5000

# Start the backend service
CMD ["yarn", "workspace", "backend", "start"]
