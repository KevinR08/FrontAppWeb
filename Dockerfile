FROM node:14

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Install the exact version of Vite used in your development environment
RUN npm install vite@4.5.1

# Build your application
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]