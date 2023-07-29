# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN  apt-get update \
     && apt-get install -y wget gnupg ca-certificates procps libxss1 \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
     && apt-get update \
     # We install Chrome to get all the OS level dependencies, but Chrome itself
     # is not actually used as it's packaged in the node puppeteer library.
     # Alternatively, we could could include the entire dep list ourselves
     # (https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix)
     # but that seems too easy to get out of date.
     && apt-get install -y google-chrome-stable \
     && rm -rf /var/lib/apt/lists/* \
     && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
     && chmod +x /usr/sbin/wait-for-it.sh

# Copy the app source code to the container
COPY . .

# Install app dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Expose the container port
EXPOSE 3002
EXPOSE 27017

# Start the app using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
