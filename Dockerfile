FROM node:12.10-alpine as build

RUN apk update && \
  apk --no-cache --update add git

RUN mkdir -p /web

WORKDIR /web

COPY package.json /web/package.json

RUN cd /web && \
  yarn install --production

COPY . /web

RUN yarn build

FROM node:12.10-alpine

ENV NODE_ENV="production"

RUN apk update

RUN mkdir -p /web

WORKDIR /web

COPY --from=build /web /web

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "--experimental-modules", "server.js"]
