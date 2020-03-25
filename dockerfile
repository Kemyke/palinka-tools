FROM node:12.16.1

RUN apt-get update && apt-get install vim -y

WORKDIR /app

COPY ./app/ ./

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 3000



