#!/bin/bash

# Set container and image name
CONTAINER_NAME="zero_to_coder_server"
IMAGE_NAME="zero_to_coder_server"
NETWORK_NAME="vm-net"

docker volume create code-storage

# Ensure the Docker network exists
docker network inspect $NETWORK_NAME >/dev/null 2>&1 || docker network create $NETWORK_NAME

# Check if the image exists
if [[ "$(docker images -q $IMAGE_NAME 2>/dev/null)" == "" ]]; then
  echo "Building Docker image..."
  docker build -t $IMAGE_NAME .
else
  echo "Docker image '$IMAGE_NAME' already exists. Skipping build..."
fi

# Stop and remove the existing container if it’s running
if [[ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]]; then
  echo "Stopping and removing existing container..."
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
fi

# Run the container
docker rm -f $CONTAINER_NAME 2>/dev/null
echo "Running the container..."
docker run -it \
  --name $CONTAINER_NAME \
  --network $NETWORK_NAME \
  -p 5000:5000 \
  --env-file .env \
  -v code-storage:/shared-volume \
  -v "$(pwd)":/zero_to_coder_server \
  -v /var/run/docker.sock:/var/run/docker.sock \
  $IMAGE_NAME
