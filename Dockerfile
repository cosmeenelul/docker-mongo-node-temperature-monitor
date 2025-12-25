FROM node:18-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

WORKDIR /home/temp-monitor-app

COPY . /home/temp-monitor-app

RUN npm install --production

EXPOSE 3000

CMD ["node", "server.js"]
