FROM node:22.12-alpine3.20

WORKDIR /app/

COPY ./package.json ./
RUN npm install