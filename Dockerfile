FROM node:12.4-alpine as builder
RUN apk update && apk add git gettext

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY "." "/app"
RUN \
    #VUE_APP_ENV=$ENV_SLUG \
    #VUE_APP_RELEASE_VERSION=$COMMIT_VERSION \
    npm run build
