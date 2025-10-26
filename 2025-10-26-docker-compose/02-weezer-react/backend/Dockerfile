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

# build typescript into javascript
RUN npm run build

# lets get rid of the src folder
RUN rm -rf ./src

# what runs when the image is loaded by docker into a container
CMD ["npm", "start"]



# docker run --name weezer-backend -d -e NODE_ENV=docker  -p 3010:3000 shaharsol/weezer-backend:3.0.0
