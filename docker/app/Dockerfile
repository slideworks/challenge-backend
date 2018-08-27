FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

EXPOSE 8080

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD [ "/start,sh" ]
