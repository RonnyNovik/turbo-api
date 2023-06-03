module.exports = {
  apps: [
    {
      name: 'api',
      interpreter: './node_modules/.bin/ts-node',
      script: './src/main.ts',
      watch: ['./src/'],
      exec_mode: 'fork',
      watch_options: {
        persistent: true,
        ignoreInitial: false,
      },
    },
  ],
};
