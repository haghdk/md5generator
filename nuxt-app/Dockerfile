FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the nuxt-app directory to the working directory
COPY nuxt-app/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code from the nuxt-app directory to the working directory
COPY nuxt-app/ ./

# Build the Nuxt 3 project
RUN npm run build

# Expose the port that the Nuxt app will run on
EXPOSE 3002

ENTRYPOINT ["node", ".output/server/index.mjs"]
