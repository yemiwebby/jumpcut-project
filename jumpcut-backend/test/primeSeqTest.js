var app = require('../generator/index');
var assert = require('assert');
var primeSeq = require('../sequencers/primeSeq').primeSeq;

describe("Generators for sequence", function () {

    it("Prime Numbers generator", function () {
        var seq = app.generator(primeSeq);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 7);
        assert.equal(seq.next(), 11);
        assert.equal(seq.next(), 13);
        assert.equal(seq.next(), 17);
        assert.equal(seq.next(), 19);
    });
});
