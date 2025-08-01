FROM node:22-alpine AS base
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

FROM base AS builder
WORKDIR /app
COPY . .
ENV LAMBDA=false
COPY package.json package-lock.json /app/
RUN npm install 
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
COPY .env /app/
EXPOSE 3000
CMD ["npm","run", "start"]
