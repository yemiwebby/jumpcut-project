var app = require('../generator/index');
var assert = require('assert');
var rangeSeq = require('../sequencers/rangeSeq').rangeSeq;

describe("Generators for sequence", function () {

    it("Range sequence generator", function () {
        var seq = app.generator(rangeSeq, 1, 2);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 7);
    });
});
