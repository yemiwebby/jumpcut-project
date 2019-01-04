import SimpleGenerator from '../controllers/simpleGenerator';
import PipeGenerator from '../controllers/pipeGenerator';


export default (app) => {
    app.get('/api/generate/factorial', SimpleGenerator.factorialGenerator);
    app.get('/api/generate/factorial/reset', SimpleGenerator.resetFactorialGenerator);
    app.get('/api/generate/fibonacci', SimpleGenerator.fibonacciGenerator);
    app.get('/api/generate/fibonacci/reset', SimpleGenerator.resetFibonacciGenerator);
    app.get('/api/generate/partial', SimpleGenerator.partialSumGenerator);
    app.get('/api/generate/partial/reset', SimpleGenerator.resetPartialSumGenerator);
    app.get('/api/generate/prime', SimpleGenerator.primeSeqGenerator);
    app.get('/api/generate/prime/reset', SimpleGenerator.resetPrimeSeqGenerator);
    app.get('/api/generate/range', SimpleGenerator.rangeSeqGenerator);
    app.get('/api/generate/range/reset', SimpleGenerator.resetRangeSeqGenerator);
    app.get('/api/generate/pipe', PipeGenerator.pipeSeqGenerator);
}