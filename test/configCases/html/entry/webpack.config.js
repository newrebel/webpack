module.exports = {
	entry: './index.html',
	module: {
    rules: [
      {
        type: 'html/experimental',
        test: /\.html$/
      }
    ]
  }
};
