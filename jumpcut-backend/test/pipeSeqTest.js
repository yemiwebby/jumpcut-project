var app = require('../generator/index');
var assert = require('assert');
var rangeSeq = require('../sequencers/rangeSeq').rangeSeq;
var accumulator = require('../sequencers/pipeSeq').accumulator;
var pipeSeq = require('../sequencers/pipeSeq').pipeSeq;
var factorialSeq = require('../sequencers/factorialSeq').factorialSeq;
var isEven = require('../sequencers/pipeSeq').isEven;
var printEven = require('../sequencers/pipeSeq').printEven;

describe("Pipes Generators", function () {

    it("Pipe Range | accumulator generator", function () {
        var pipedSeq = pipeSeq(rangeSeq, 2, 3)
            .pipeline(accumulator)
            .invoke();
        var seq = app.generator(pipedSeq);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 7);
        assert.equal(seq.next(), 15);
        assert.equal(seq.next(), 26);
    });

    it("Accumulator | isEven | printEven pipes over factorial generator", function () {

        var pipedSeq = pipeSeq(factorialSeq)
            .pipeline(accumulator)
            .pipeline(isEven)
            .pipeline(printEven, 'The number')
            .invoke();
        var seq = app.generator(pipedSeq);

        assert.equal(seq.next(), 'The number 1 is not even.');
        assert.equal(seq.next(), 'The number 2 is even.');
        assert.equal(seq.next(), 'The number 4 is even.');
        assert.equal(seq.next(), 'The number 10 is even.');
        assert.equal(seq.next(), 'The number 34 is even.');
    });
});