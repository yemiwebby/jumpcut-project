const primeSeq = () => {
    let i = 1;
    let result;
    let checkOnResult = false;
    const primeReturn = () => {
        if (!result) {
            result = 2;
            return result;
        }

        while (!checkOnResult) {
            checkOnResult = true;
            i = result;
            result += 1;
            while (i > 1) {
                if (result % i === 0) {
                    checkOnResult = false;
                }
                i -= 1;
            }
        }
        checkOnResult = false;
        return result;
    };
    return primeReturn;
}

export default primeSeq;