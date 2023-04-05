FROM node:18-alpine3.16

RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN npm install

EXPOSE 8818

CMD ["npm", "start"]