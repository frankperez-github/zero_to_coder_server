# Use official Node.js LTS image (Alpine version)
FROM node:18-alpine

# Install bash and docker-cli
RUN apk add --no-cache bash docker-cli

# Set working directory inside the container
WORKDIR /zero_to_coder_server

# Copy package.json and yarn.lock before running yarn install
COPY package.json yarn.lock ./

# Install dependencies (omit dev dependencies)
RUN yarn install --production

# Copy the entire project
COPY . .

# Make sure build script is executable
RUN chmod +x ./build-sandbox.sh

# Set environment variables
ENV PORT=5000

# Expose the application port
EXPOSE 5000

RUN ls -l /zero_to_coder_server && file /zero_to_coder_server/build-sandbox.sh

# Build sandbox and then start the server
CMD ["sh", "-c", "/zero_to_coder_server/build-sandbox.sh && yarn start"]
