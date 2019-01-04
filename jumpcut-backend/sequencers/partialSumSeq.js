module.exports = {

    partialSumSeq: (...args) => {
        var sum = 0;
        return () => {
            if (args.length == 0) throw 'error!';
            return sum += args.shift();
        };
    }
}