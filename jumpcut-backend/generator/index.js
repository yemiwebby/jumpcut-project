module.exports = {
    generator: function (sequencer) {
        const seqArgs = [...arguments];
        seqArgs.shift();
        const seq = sequencer(...seqArgs);
        return {
            next() {
                return seq();
            }
        };
    }
}