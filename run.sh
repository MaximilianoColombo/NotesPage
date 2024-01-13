#!/bin/bash

#BACKEND

echo "Setup the backend"
cd backend || exit

#DATABASE
echo "Connecting the database"
#Setup the database
read -p "Enter your PostgreSQL user: " db_user
read -s -r -p "Enter your PostgreSQL password: " db_password
read -p "Enter the PostgreSQL port: " db_port
read -p "Enter the Database name: " db_name
echo
#Creating the env file
echo "Creating the .env file..."
echo "DATABASE_URL=\"postgresql://$db_user:$db_password@localhost:$db_port/$db_name\"" >.env

#PRISMA
echo "Generate migrations"
npx prisma migrate save --name init --experimental
npx prisma migrate up --experimental
echo "Generate client"
npx prisma generate

#INSTALLING DEPENDENCIES AND RUN SERVER
echo "Installing backend dependencies"
npm install
echo "Running the backend server"
npm start

#BACK TO THE ROOT DIR
cd .. || exit

#FRONTEND
echo "Setup the frontend"
cd frontend || exit
echo "Installing frontend dependencies"
npm install
echo "Running the frontend server"
npm start

echo "Global setup finished. Happy coding"

chmod +x run.sh
