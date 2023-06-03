module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/main.js',
      exec_mode: 'cluster',
      watch_options: {
        persistent: true,
        ignoreInitial: false,
      },
    },
  ],
};
