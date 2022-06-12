#!/bin/bash

# Run migrations
printf "\n "
printf "\nRunning migrations..."
npm run db:migrate

printf "\n "
printf "\nRunning database seeds..."
npm run db:seed

if [ ! $? -eq 0 ]; then
	prinf "Database already seeded. Exiting.."
	exit 1
fi

printf "\n"
printf "Post deploy steps done, have fun \xF0\x9F\x8D\xBA"

