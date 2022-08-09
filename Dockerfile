FROM node:16 

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

EXPOSE 8000

CMD [ "node", "app.js" ] 
