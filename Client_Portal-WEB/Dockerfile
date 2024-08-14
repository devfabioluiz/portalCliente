# Local
FROM node:19-alpine As local

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --silent

COPY .env.example .env.development
COPY . ./

CMD [ "npm", "run", "dev" ]

# Dev
FROM node As dev

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]

