FROM golang:latest

RUN apt update && apt upgrade -y
RUN apt install --yes curl unzip

ENV BUN_INSTALL="/usr/local"

RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /opt/build

COPY . .

RUN /opt/build/scripts/install.sh

CMD [ "/opt/pyro/service", "/opt/pyro/public" ]
