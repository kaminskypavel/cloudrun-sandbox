FROM kaminskypavel/alpine-multi-lang

WORKDIR /app
COPY *.json /app/
RUN yarn
ADD src /app/src
RUN yarn build
EXPOSE 8080

ENTRYPOINT ["yarn","start:prod"]

