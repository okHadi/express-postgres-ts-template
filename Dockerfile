FROM node:22-alpine AS base
ENV NODE_ENV=production YARN_VERSION=4.1.1
RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

FROM base as builder
WORKDIR /app
COPY . .
ENV LAMBDA=false
COPY package.json package-lock.json /app/
RUN npm install 
RUN npm build

FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
ENV NODE_ENV=production
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
COPY .env /app/
EXPOSE 3000
CMD ["npm", "start"]
