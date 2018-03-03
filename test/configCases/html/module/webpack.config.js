module.exports = {
	entry: './index.js',
  module: {
    rules: [
      {
        type: 'html/experimental',
        test: /\.html$/
      }
    ]
  }
};
