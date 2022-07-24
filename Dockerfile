FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

USER node

ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]