FROM node:slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY  build  ./build

COPY server.js ./

CMD ["node", "server.js"]    

