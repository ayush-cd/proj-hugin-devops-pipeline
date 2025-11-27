# Simple runtime application using Node.js
FROM node:18-alpine

WORKDIR /app

# Copy only the package files first (for layer caching)
COPY app/package*.json ./

RUN npm install --omit=dev

# Copy the rest of the application
COPY app/ .

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
