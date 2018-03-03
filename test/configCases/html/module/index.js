import html from './index.html';

it('Should import HTML', function() {
	html.should.be.eql(`<div id="app"></div>`);
});

it('Should import() HTML', function() {
	import('./index.html').then((html) => {
		return html.default.should.be.eql(`<div id="app"></div>`)
	});
});

it('Should require() HTML', function() {
	const html = require('./index.html');

	html.should.be.eql(`<div id="app"></div>`);
});
