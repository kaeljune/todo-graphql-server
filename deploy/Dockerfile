# deploy/Dockerfile
# Dockerfile for your app.
# Change "todos" in the Dockerfile to your app's name
FROM node:0.10
MAINTAINER kaeljube <hiepth9x@gmail.com>
RUN apt-get install -y curl
RUN curl https://install.meteor.com/ | /bin/sh
# Change "todos" to your app's name 
ADD . /opt/todos/app
# Install NPM packages
WORKDIR /opt/todos/app/programs/server
RUN npm install
# Set environment variables 
WORKDIR /opt/todos/app
ENV PORT 80
ENV ROOT_URL http://127.0.0.1
ENV MONGO_URL mongodb://kaeljune:27017/todos
# Expose port 80
EXPOSE 80
# Start the app
CMD node ./main.js
