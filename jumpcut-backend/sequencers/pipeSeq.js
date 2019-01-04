module.exports = {
    pipeSeq: function (sequencer) {
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
                return function invokeReturn() {
                    return function invokeNext() {
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
                };
            }
        };
    },

    accumulator: function () {
        let sum = 0;
        return function accumulatorReturn(value) {
            sum += value;
            return sum;
        };
    },

    isEven: function () {
        return function isEvenReturn(arg) {
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
    },

    printEven(prefix) {
        return function printEvenReturn(data) {
            if (data.status) {
                return `${prefix} ${data.number} is even.`;
            }
            return `${prefix} ${data.number} is not even.`;
        };
    },
}