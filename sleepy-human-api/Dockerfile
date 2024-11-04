# Use an official Node.js image
FROM node:20

# Create app directory
WORKDIR /sleepy-human-api

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source code
COPY . .

# Copy the shared lib into the container
# COPY ./shared-lib /sleepy-human-api/shared-lib

# Expose port if required
EXPOSE 3001

# Start the service
CMD ["npm", "start"]


