# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files and install deps early to leverage Docker cache
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the backend code
COPY . .

# Expose the app port
EXPOSE 5000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the server
CMD ["node", "index.js"]
