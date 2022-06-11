#!/bin/sh
#!/usr/bin/with-contenv sh

while ! nc -z db-local 5432; do sleep 3; done

printf "running sh docker-files/scripts/post-deploy.sh in /usr/src/app"
cd /usr/src/app && sh docker-files/scripts/post-deploy.sh

if [ ! $? -eq 0 ]; then
	prinf "Failed to run post deploy steps. Exiting.."
	exit 1
fi

printf "\n"
printf "\nPreparing server..."
npm run start:dev