FROM node:14.15.1-alpine

WORKDIR /app
COPY *.json /app/
RUN yarn
ADD src /app/src
EXPOSE 8080

CMD ["yarn","start"]
