FROM node:alpine as build-stage
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM nginx:alpine as serve-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html