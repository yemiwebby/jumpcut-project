const rangeSeq = (start, step) => {
    let current = start;
    const rangeReturn = () => {
        const result = current;
        current += step;
        return result;
    };
    return rangeReturn;
}

export default rangeSeq;