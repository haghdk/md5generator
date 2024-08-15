FROM node:22-alpine

WORKDIR /app

COPY package.json /app/

RUN npm ci && npm cache clean --force

ADD . /app

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3002

ENTRYPOINT ["node", ".output/server/index.mjs"]
