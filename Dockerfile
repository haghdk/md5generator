FROM node:22-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the Nuxt 3 project
RUN npm run build

# Step 7: Expose the port that the Nuxt app will run on
EXPOSE 3002

ENTRYPOINT ["node", ".output/server/index.mjs"]
