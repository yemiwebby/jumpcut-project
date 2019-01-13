const pipeSeq = (sequencer) => {
    const pipes = [], seqArgs = [...arguments];
    seqArgs.shift();
    const seq = sequencer(...seqArgs);
    let maxSteps, maxResult, err = false;
    return {
        pipeline(pipe) {
            const pipeArgs = [...arguments];
            pipeArgs.shift();
            pipes.push(pipe(...pipeArgs));
            return this;
        },
        invoke() {
            const invokeReturn = () => {
                const invokeNext = () => {
                    if (err) {
                        throw new Error('End of sequence error');
                    }
                    if (maxSteps) {
                        maxSteps();
                    }
                    const result = pipes.reduce((res, pipe) => pipe(res), seq());
                    if (result > maxResult) {
                        err = true;
                        throw new Error('End of sequence error');
                    }
                    return result;
                };
                return invokeNext;
            };
            return invokeReturn;
        }
    };
},

const accumulator = () => {
    let sum = 0;
    const accumulatorReturn = (value) => {
        sum += value;
        return sum;
    };
    return accumulatorReturn;
},

const isEven = () => {
    const isEvenReturn = (arg) => {
        if (arg === 1) {
            return {
                status: false,
                number: 1
            };
        }
        return {
            status: true,
            number: arg
        };
    };
    return isEvenReturn;
},

const printEven = (prefix) => {
    const printEvenReturn = (data) => {
        if (data.status) {
            return `${prefix} ${data.number} is even.`;
        }
        return `${prefix} ${data.number} is not even.`;
    };
    return printEvenReturn;
}


export default { pipeSeq, accumulator, isEven, printEven }