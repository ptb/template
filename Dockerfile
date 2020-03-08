FROM node:12.10-alpine as build

# we need git so we can tag the build with the commit
RUN apk update && apk --no-cache --update add git
RUN mkdir /web
WORKDIR /web

COPY package.json /web/package.json
RUN cd /web && yarn install --production

COPY . /web

RUN yarn build

## create release image
FROM node:12.10-alpine

ENV NODE_ENV="production"

RUN apk update
RUN mkdir /web

WORKDIR /web

COPY --from=build /web /web

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "--experimental-modules", "server.js"]
