var app = require('../generator/index');
var assert = require('assert');
var fibonacciSeq = require('../sequencers/fibonacciSeq').fibonacciSeq;

describe("Generators for sequence", function () {

    it("Fibonacci sequence generator", function () {
        var seq = app.generator(fibonacciSeq);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 8);
        assert.equal(seq.next(), 13);
    });
});