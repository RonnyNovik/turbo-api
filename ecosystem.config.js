module.exports = {
  apps: [
    {
      script: './src/main.ts',
      watch: '.',
      env: {
        "DB_USER": "supertest",
        "DB_PASS": "sup3rt3st",
        "JWT_SECRET_KEY":
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDYyNDY5NiwiaWF0IjoxNjg0NjI0Njk2fQ.UUeBwLnEXYGnpRDgac09ATfNwLpXQxp3zavDyWti9W4",
          "JWT_EXPIRATION_DURATION": "30d",
      },
    },
  ],
};
