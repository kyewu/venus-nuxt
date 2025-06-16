# Stage 1: Build stage
FROM node:24-alpine AS builder

# Install required dependencies for better-sqlite3
RUN apk add --no-cache python3 make g++ gcc

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@9.6.0

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --production=false --frozen-lockfile

# Copy project files
COPY . .

# Build the application
RUN node_modules/.bin/nuxt build --dotenv .env.production

# Stage 2: Production stage
FROM node:24-alpine

# Install runtime dependencies for better-sqlite3
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["node", ".output/server/index.mjs"]