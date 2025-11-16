# start with base image, linux + node
FROM node:22-alpine

# create a folder for the app on the target OS
WORKDIR /app

# copy package.json && package-lock.json
COPY ./package*.json ./

# install all dependencies
RUN npm install

# copy everthing except whatever is in .dockerignore
COPY ./ ./

# what runs when the image is loaded by docker into a container
CMD ["npm", "run", "docker"]



# docker run --name weezer-frontend -d -p 3011:5173 shaharsol/weezer-frontend:1.0.1
