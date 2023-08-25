#!/bin/bash

# Start the MongoDB container
sudo docker-compose up -d

# Give MongoDB a moment to initialize. This duration might need adjustment based on your environment.
sleep 10

