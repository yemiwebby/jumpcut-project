const partialSumSeq = (...args) => {
    let sum = 0;
    return () => {
        if (args.length == 0) throw 'error!';
        return sum += args.shift();
    };
}

export default partialSumSeq;