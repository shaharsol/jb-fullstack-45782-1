# i start by selecting an existing docker image (a set of docker layers that were "closed" as an image for re-use)
FROM node:22-alpine

# i create a folder named /app in the root of the file system
WORKDIR /app

# i copy the app.js from the neighborhood of the Dockerfile to the docker image i am currently creating
COPY app.js ./

# lastly, when all is ready i run the program
CMD [ "node", "/app/app.js" ]




