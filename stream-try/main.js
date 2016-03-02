
var Randoms = require('./rand-num');
var Cache = require('./cache');
var Trans = require('./transform');

var randoms = new Randoms({ limit: 15 });
var cache = new Cache();
var trans = new Trans();

randoms.on('data', function(chunk) {
    console.log(chunk.toString());
});

randoms.pipe(trans).pipe(cache);