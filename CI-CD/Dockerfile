# Use node 4.4.5 LTS
FROM node:7.2.2
ENV LAST_UPDATED 20200428

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 4200

# Launch application
CMD ["npm","start"]