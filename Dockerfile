FROM node:18.17.1

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]