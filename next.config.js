const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath:
      process.env.NODE_ENV === 'production'
        ? './tsconfig.build.json'
        : './tsconfig.json',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = nextConfig;
