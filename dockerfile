# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
# WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define environment variable
# ENV NODE_ENV=production

# Run npm start when the container launches
CMD ["npm", "start"]
