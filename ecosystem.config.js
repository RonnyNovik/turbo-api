module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      watch_options: {
        persistent: true,
        ignoreInitial: false,
      },
    },
  ],
};
