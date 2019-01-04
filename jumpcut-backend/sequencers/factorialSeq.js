module.exports = {
    factorialSeq: () => {
        let currentNumber = 1, result;
        return function factorialReturn() {
            if (!result) { result = 1; return result; }
            result *= currentNumber;
            currentNumber += 1;
            return result;
        };
    }
}