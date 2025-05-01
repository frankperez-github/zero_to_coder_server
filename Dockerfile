# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /zero_to_coder_server

# Copy package.json and package-lock.json before running npm install
COPY package*.json ./

# Install dependencies
RUN yarn install --omit=dev

# Copy the entire project
COPY . .

# Set environment variables
ENV PORT=5000

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["yarn", "start"]
