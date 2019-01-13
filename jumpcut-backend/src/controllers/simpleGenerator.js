import { generator } from '../../generator/index';
import factorial from '../../sequencers/factorialSeq';
import fibonacci from '../../sequencers/fibonacciSeq';
import partialSum from '../../sequencers/partialSumSeq';
import prime from '../../sequencers/primeSeq';
import range from '../../sequencers/rangeSeq';
let genFactorial = generator(factorial);
let genFibonacci = generator(fibonacci);
let genPartialSum = generator(partialSum, 1, 3, 7, 2, 0);
let genPrimeSeq = generator(prime);
let genRangeSeq = generator(range, 1, 2);


class SimpleGenerator {
    static factorialGenerator(req, res) {
        res.json({
            gen: genFactorial.next()
        })
    }

    static resetFactorialGenerator(req, res) {
        genFactorial = generator(factorial);
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
        genFibonacci = generator(fibonacci)
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
        genPartialSum = generator(partialSum, 1, 3, 7, 2, 0);
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
        genPrimeSeq = generator(prime);
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
        genRangeSeq = generator(range, 1, 2);
        res.json({
            reset: genRangeSeq.next()
        })
    }
}

export default SimpleGenerator;