FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

WORKDIR /src

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /src
COPY --from=deps /src/node_modules ./node_modules
COPY . .

RUN pnpm run build

CMD ["pnpm", "dev"]
EXPOSE 3000