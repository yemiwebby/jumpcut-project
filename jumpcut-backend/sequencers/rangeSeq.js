module.exports = {

    rangeSeq: (start, step) => {
        let current = start;
        return function rangeReturn() {
            const result = current;
            current += step;
            return result;
        };
    }
}