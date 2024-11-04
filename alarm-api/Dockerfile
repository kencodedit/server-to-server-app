
FROM node:20

# Create app directory
WORKDIR /alarm-api

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source code copies everything in the current directory into the docker hub
COPY . .

# Copy the shared lib into the container
# COPY ../shared-lib /alarm-api/shared-lib

# Expose port if required
EXPOSE 3000

# Start the service
CMD ["npm", "start"]

