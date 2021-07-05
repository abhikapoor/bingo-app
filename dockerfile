FROM node:stretch-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install && npm run build

COPY  build  ./build

COPY server.js ./
CMD ["npm", "start"]    

