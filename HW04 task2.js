const getMaxValue = (...allValues) => {
    let maxValue = allValues[0];
    for (let i = 1; i < allValues.length; i++) {
        if (allValues[i] > maxValue) {
            maxValue = allValues[i];
        }
    }
    return maxValue;
}
