var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.addPhoto', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.addPhoto({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.addPhoto({
				photoset_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.addPhoto({
			photoset_id: '_',
			photo_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photosets.addPhoto');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photoset_id, '_');
		assert.equal(req.params.photo_id, '_');
	});

});
