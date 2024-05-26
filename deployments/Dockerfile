FROM golang:latest

RUN apt update && apt install --yes curl build-essential unzip

ENV BUN_INSTALL="/usr/local"
RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /opt/pyro

COPY package*.json ./

RUN bun install

COPY . .

EXPOSE 8080

CMD [ "bun", "start" ]
