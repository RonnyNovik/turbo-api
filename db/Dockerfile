FROM mongo

# Set the working directory inside the container
WORKDIR /db

# Copy the contents of the 'db' folder to the container
COPY ./dump /db/dump

# Expose the MongoDB default port
EXPOSE 27017

# Start the mongod service
CMD ["mongod", "--bind_ip_all"]