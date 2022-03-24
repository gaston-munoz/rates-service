FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig.json ./

COPY yarn.lock ./

RUN yarn install

COPY ./lib ./lib

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]