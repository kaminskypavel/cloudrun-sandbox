FROM kaminskypavel/alpine-multi-lang

WORKDIR /app
COPY *.json /app/
RUN yarn
ADD src /app/src
EXPOSE 8080

ENTRYPOINT ["yarn","start"]

