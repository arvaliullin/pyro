FROM golang:latest

RUN apt update && apt install --yes curl build-essential

RUN apt install --yes nodejs npm

WORKDIR /opt/pyro

COPY package*.json ./

RUN npm install -g bun

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
