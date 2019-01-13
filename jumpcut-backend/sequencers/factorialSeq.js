const factorialSeq = () => {
    let currentNumber = 1, result;
    const factorialReturn = () => {
        if (!result) { result = 1; return result; }
        result *= currentNumber;
        currentNumber += 1;
        return result;
    };
    return factorialReturn;
}

export default factorialSeq;