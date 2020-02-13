const inRange = (min, max) => {
    return value => {
        return value >= min && value <= max;
    }
}
const arr = [0, 1, 1.5, 17, 9, 0.5];
console.log(arr.filter(inRange(1, 10)));
