#!/bin/bash

docker build -f Dockerfile.postgres -t postgres_container .
POSTGRES_CONTAINER_ID=$(docker run -p 127.0.0.1:5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres_container)

echo "$(docker inspect --format='{{.State.Status}}' "$POSTGRES_CONTAINER_ID")"
until [ running == "$(docker inspect --format='{{.State.Status}}' "$POSTGRES_CONTAINER_ID")" ]
do
    echo "waiting for postgres container..."
    echo "$(docker inspect --format='{{.State.Status}}' "$POSTGRES_CONTAINER_ID")"
    sleep 0.5
done


# kill database containers
function cleanup {
  echo "Killing PostgreSQL Container: $POSTGRES_CONTAINER_ID"
  docker rm -f "$POSTGRES_CONTAINER_ID"
}

trap cleanup EXIT

sleep 10

# run test
yarn run test