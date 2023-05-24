module.exports = {
  apps: [
    {
      name: 'api',
      script: './src/main.ts',
      node_args: '-r esm',
      watch: ['./src/'],
      instances: '1',
      exec_mode: 'fork',
      watch_options: {
        persistent: true,
        ignoreInitial: false,
      },
    },
  ],
};
