module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-app-2'
      : '/',
  css: {
    // Enable CSS source maps.

    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
