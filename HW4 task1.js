const getMaxValue = (checkArray) => {
    let maxValue = checkArray[0];
    for (let i = 1; i < checkArray.length; i++) {
        if (checkArray[i] > maxValue) {
            maxValue = checkArray[i];
        }
    }
    return maxValue;
}
console.log(getMaxValue([3, 167, 487, 890], 78))