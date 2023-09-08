# Using Node 16 as our base image for the frontend-builder stage
FROM node:16 as frontend-builder

# Setting the working directory inside the container
#WORKDIR /secure-arc

# Copy the entire monorepo to the container
COPY . .

# Installing only production dependencies using Yarn
RUN yarn install --frozen-lockfile 

# Building the frontend
# RUN yarn --cwd packages/frontend build

# If you want to run this command at the root level of the Dockerfile:
RUN yarn build:frontend

# The CMD instruction provides defaults for an executing container.
# Since you have a "build" and a "start" command, you probably want to run the start command when 
# the container is run. So, you should only include the "start" command in the CMD instruction.
CMD [ "yarn", "start:production:frontend" ]
