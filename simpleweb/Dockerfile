# Specify a base image.
# Use one that has node installed.
# "alpine" is the tag, basically meaning the smallest/most compact image of node.
FROM node:alpine

# Any following commands will be executed relative to this folder.
WORKDIR /usr/app

# Copy files from local machine into container.
# Initially, only copy ```package.json``` into /usr/app in the container, so we can ```npm install``` and those steps get cached.
COPY ./package.json ./
RUN npm install
# Then, copy everything from within build context to /usr/app in container. Now, when change code, won't rerun ```npm install``` everytime.
COPY ./ ./

CMD ["npm", "start"]
