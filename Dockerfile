FROM node:14.18.1

WORKDIR /src

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY src ./src
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "build/shared/infra/http/server.js"]