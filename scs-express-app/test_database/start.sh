#!/bin/sh

# Run the MySQL container, with a database named 'users' and credentials
# for a users-service user which can access it.
echo "Starting DB..."
docker run --name db -d \
  -e MYSQL_ROOT_PASSWORD=123 \
  -e MYSQL_DATABASE=scs -e MYSQL_USER=scs -e MYSQL_PASSWORD=123 \
  -p 3330:3306 \
  mysql:latest

time sleep 30.0

# Wait for the database service to start up.
echo "Waiting for DB to start up..."
docker exec db mysqladmin --silent --wait=30 -uscs -p123 ping

# Run the setup script.
echo "Setting up initial data..."
docker exec -i db mysql -uscs -p123 scs < db_snapshot.sql
