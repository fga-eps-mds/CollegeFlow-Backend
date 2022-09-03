FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json  /usr/src/app

RUN npm install --cache=false

COPY . /usr/src/app/

EXPOSE 8000

CMD [ "npm", "start" ]