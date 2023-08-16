FROM node:18

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

CMD [ "pnpm", "run", "dev" ]