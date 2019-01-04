var assert = require('assert');
var factorialSeq = require('../sequencers/factorialSeq').factorialSeq;
const app = require('../generator/index');

describe("Generators for sequence", function () {

    it("factorial sequence generator", function () {
        var seq = app.generator(factorialSeq);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 6);
        assert.equal(seq.next(), 24);
    });
});