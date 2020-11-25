
FROM node:14.15.1-alpine

LABEL maintainer="Pavel 'PK' Kaminsky <kaminsky.pavel@gmail.com>"
RUN apk update && apk upgrade

#
#  __  __         _  _    _   _                            _____
# |  \/  |       | || |  (_) | |                          |_   _|
# | \  / | _   _ | || |_  _  | |      __ _  _ __    __ _    | |   _ __ ___    __ _
# | |\/| || | | || || __|| | | |     / _` || '_ \  / _` |   | |  | '_ ` _ \  / _` |
# | |  | || |_| || || |_ | | | |____| (_| || | | || (_| |  _| |_ | | | | | || (_| |
# |_|  |_| \__,_||_| \__||_| |______|\__,_||_| |_| \__, | |_____||_| |_| |_| \__, |
#                                                   __/ |                     __/ |
#                                                  |___/                     |___/

# a multi language image support
#       - Nodejs 14.15.1 LTS
#       - Python 3.8

# Nano Editor (optional)
RUN apk add nano

# Python
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

#RUN echo "alias python=python3" >> /root/.ashrc
