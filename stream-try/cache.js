var stream = require('stream');
var util = require('util');

function Cache (options) {
	stream.Writable.call(this, options);
};

util.inherits(Cache, stream.Writable);

Cache.prototype._write = function (chunk, encoding, callback) {
	console.log(chunk.toString());
	callback();
};

module.exports = Cache;