#!/bin/bash

# Run migrations
printf "\n "
printf "\nRunning migrations..."
npm run db:migrate

printf "\n"
printf "Post deploy steps done, have fun \xF0\x9F\x8D\xBA"

