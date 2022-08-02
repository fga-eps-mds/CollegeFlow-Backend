FROM node:16 

WORKDIR /app

COPY . .

CMD [ "npm", "run", "start" ] 