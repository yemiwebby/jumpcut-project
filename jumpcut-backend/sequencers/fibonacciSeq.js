const fibonacciSeq = () => {
    let previousFirst = 0, previousSecond = 1, next = previousSecond;
    return () => {
        previousFirst = previousSecond;
        previousSecond = next;
        next = previousFirst + previousSecond;
        return previousFirst;
    }
}

export default fibonacciSeq;