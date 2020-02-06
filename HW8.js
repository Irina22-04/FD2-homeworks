function myBind(func, context, ...arg) {
    return function(...arg2) {
        return func.apply(context, arg.concat(arg2));
    }
}

const student = {
    name: 'Саша',
    age: 25,
}

function favoriteSubj(arg1, arg2) {
    console.log(`${this.name}: любимые предметы ${arg1} и ${arg2}`);
}

myBind(favoriteSubj, student, 'математика', 'физика')();
myBind(favoriteSubj, student)('математика', 'физика');

function sum(a, b, c) {
    return a + b + c;
}

console.log(myBind(sum, null, 3, 4, 5)());
console.log(myBind(sum, null)(3, 4, 5));