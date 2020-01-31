const deepEqual = (a, b) => {

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    for (let prop in a) {
        if (!(prop in b)) {
            return false;
        }

        if (typeof a[prop] === 'object') {
            const result = deepEqual(a[prop], b[prop]);
            if (!result) {
                return false;
            }
            continue;
        }

        if (a[prop] !== b[prop]) {
            return false;
        }
    }

    return true;
};