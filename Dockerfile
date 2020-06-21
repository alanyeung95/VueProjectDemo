FROM node:12.4-alpine as builder
RUN apk update && apk add git gettext

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY "." "/app"
#ARG API_GATEWAY_URL
#ARG ACCOUNTS_SERVICE_URL
# Specifiying values for replace to avoid side-effect i.e $url in directives
#RUN envsubst '${API_GATEWAY_URL} ${ACCOUNTS_SERVICE_URL}' < nginx.template.conf > nginx.conf

# build is by default in NODE_ENV=production which read .env.production
RUN \
    #VUE_APP_ENV=$ENV_SLUG \
    #VUE_APP_RELEASE_VERSION=$COMMIT_VERSION \
    npm run build

# For building production
#FROM nginx:1.13-alpine
#COPY --from=builder "/app/dist/" "/usr/share/nginx/html"
#COPY --from=builder "/app/nginx.template.conf" "/etc/nginx/conf.d/default.conf"
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]