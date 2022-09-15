var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.upload.checkTickets', function () {

	it('requires "tickets"', function () {

		assert.throws(function () {
			flickr.photos.upload.checkTickets({});
		}, function (err) {
			return err.message === 'Missing required argument "tickets"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.upload.checkTickets({
			tickets: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.upload.checkTickets');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.tickets, '_');
	});

});
