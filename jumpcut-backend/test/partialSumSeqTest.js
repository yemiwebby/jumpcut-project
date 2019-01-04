var app = require('../generator/index');
var assert = require('assert');
var partialSumSeq = require('../sequencers/partialSumSeq').partialSumSeq;

describe("Generators for sequence", function () {

    it("Partial sum generator", function () {
        var seq = app.generator(partialSumSeq, 1, 3, 7, 2, 0);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 4);
        assert.equal(seq.next(), 11);
        assert.equal(seq.next(), 13);
        assert.equal(seq.next(), 13); //End of sequence
    });
});
