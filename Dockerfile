# Simple runtime application using Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY app/ ./app

EXPOSE 3000

CMD ["node", "app/index.js"]