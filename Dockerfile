###################
### initializer ###
###################

FROM node:16.15.1-alpine3.16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm pkg delete scripts.prepare

RUN npm ci

COPY . .

CMD ["npm", "run", "build"]



############
### prod ###
############

FROM node:16.15.1-alpine3.16 AS main

WORKDIR /app

COPY package*.json ./

RUN npm pkg delete scripts.prepare

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./

ENTRYPOINT ["npm", "run"]
CMD ["start:prod"]
