FROM node:lts-alpine as develop

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


FROM base as build

RUN npm run build


FROM node:lts-alpine
RUN npm install --global serve
WORKDIR /app
COPY --from=build /app/dist .
CMD ["serve", "-p", "3000", "-s", "."]
