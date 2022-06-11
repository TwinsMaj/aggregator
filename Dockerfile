FROM node:14.19.3-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8000
CMD ["sh", "/usr/src/app/docker-files/scripts/container-entrypoint.sh"]