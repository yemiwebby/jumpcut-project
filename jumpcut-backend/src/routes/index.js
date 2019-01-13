import express from 'express';
import SimpleGenerator from '../controllers/simpleGenerator';
import PipeGenerator from '../controllers/pipeGenerator';

const router = express.Router();

router.get('/factorial', SimpleGenerator.factorialGenerator);
router.get('/factorial/reset', SimpleGenerator.resetFactorialGenerator);
router.get('/fibonacci', SimpleGenerator.fibonacciGenerator);
router.get('/fibonacci/reset', SimpleGenerator.resetFibonacciGenerator);
router.get('/partial', SimpleGenerator.partialSumGenerator);
router.get('/partial/reset', SimpleGenerator.resetPartialSumGenerator);
router.get('/prime', SimpleGenerator.primeSeqGenerator);
router.get('/prime/reset', SimpleGenerator.resetPrimeSeqGenerator);
router.get('/range', SimpleGenerator.rangeSeqGenerator);
router.get('/range/reset', SimpleGenerator.resetRangeSeqGenerator);
router.get('/pipe', PipeGenerator.pipeSeqGenerator);

export default router;