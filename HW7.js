const calculator = (function () {
        let result = 0;
        return {
            clear() {
                result = 0;
            },
            add(a) {
                result += a;
            },
            subtract(a) {
                result -= a;
            },
            multiply(a) {
                result *= a;
            },
            devide(a) {
                result /= a;
            },
            pow(a) {
                result = Math.pow(result, a);
            },
            sqrt() {
                result = Math.sqrt(result);
            },
            resid(a) {
                result %= a;
            },
            showResult() {
                return result;
            },
            setResult(a) {
                result = a;
            },
        }
    }
)();