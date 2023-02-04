FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build


CMD [ "serve", "-s", "build" ]
