FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE ${APP_PORT}
CMD ["npm", "run", "dev"]