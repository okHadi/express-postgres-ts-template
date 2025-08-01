FROM node:20.11.1
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
