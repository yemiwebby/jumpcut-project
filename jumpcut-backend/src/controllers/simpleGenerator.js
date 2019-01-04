const sequence = require('../../generator/index');
const factorial = require('../../sequencers/factorialSeq').factorialSeq;
const fibonacci = require('../../sequencers/fibonacciSeq').fibonacciSeq;
const partialSum = require('../../sequencers/partialSumSeq').partialSumSeq;
const prime = require('../../sequencers/primeSeq').primeSeq;
const range = require('../../sequencers/rangeSeq').rangeSeq;
var genFactorial = sequence.generator(factorial);
var genFibonacci = sequence.generator(fibonacci);
var genPartialSum = sequence.generator(partialSum, 1, 3, 7, 2, 0);
var genPrimeSeq = sequence.generator(prime);
var genRangeSeq = sequence.generator(range, 1, 2);


class SimpleGenerator {
    static factorialGenerator(req, res) {
        res.json({
            gen: genFactorial.next()
        })
    }

    static resetFactorialGenerator(req, res) {
        genFactorial = sequence.generator(factorial);
        res.json({
            reset: genFactorial.next()
        })
    }

    static fibonacciGenerator(req, res) {
        res.json({
            gen: genFibonacci.next()
        })
    }

    static resetFibonacciGenerator(req, res) {
        genFibonacci = sequence.generator(fibonacci)
        res.json({
            reset: genFibonacci.next()
        })
    }

    static partialSumGenerator(req, res) {
        res.json({
            gen: genPartialSum.next()
        })
    }

    static resetPartialSumGenerator(req, res) {
        genPartialSum = sequence.generator(partialSum, 1, 3, 7, 2, 0);
        res.json({
            reset: genPartialSum.next()
        })
    }

    static primeSeqGenerator(req, res) {
        res.json({
            gen: genPrimeSeq.next()
        })
    }

    static resetPrimeSeqGenerator(req, res) {
        genPrimeSeq = sequence.generator(prime);
        res.json({
            reset: genPrimeSeq.next()
        })
    }

    static rangeSeqGenerator(req, res) {
        res.json({
            gen: genRangeSeq.next()
        })
    }

    static resetRangeSeqGenerator(req, res) {
        genRangeSeq = sequence.generator(range, 1, 2);
        res.json({
            reset: genRangeSeq.next()
        })
    }
}

export default SimpleGenerator;