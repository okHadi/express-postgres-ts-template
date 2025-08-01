FROM node:22-alpine

WORKDIR /usr/src/app

COPY docs/package*.json ./

RUN npm install

COPY docs/ ./

EXPOSE 8080

CMD [ "npm", "start" ]
