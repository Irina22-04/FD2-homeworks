function HashStorageFunc() {
    this._hash = {};
    this.addValue = function (key, value) {
        this._hash[key] = value;
    };
    this.getValue = function (key) {
        return this._hash[key];
    };
    this.deleteValue = function (key) {
        if (key in this._hash) {
            return delete this._hash[key];
        }
        return false;
    };
    this.getKeys = function () {
        return Object.keys(this._hash);
    };
}

function ClassA() {
    HashStorageFunc.call(this);
    this.deleteValue = function (key) {
        if (key in this._hash) {
            delete this._hash[key];
            return 'значение удалено';
        }
        return 'такого значения нет';
    };
}

function ClassB() {
    HashStorageFunc.call(this);
    this.getEntries = function() {
        return Object.entries(this._hash);
    }
}

const drinkStorage = new ClassA();
drinkStorage.addValue('морс', {'состав:': 'вода, варенье', 'алкоголь': false});
console.log(drinkStorage.getKeys());
console.log(drinkStorage.getValue('морс'));
console.log(drinkStorage.deleteValue('компот'));
console.log(drinkStorage.deleteValue('морс'));
console.log(drinkStorage.getKeys());
drinkStorage.addValue('компот', {'состав:': 'вода, фрукты', 'алкоголь': false});
drinkStorage.addValue('каппучино', {'состав:': 'вода, кофе, сахар, молоко', 'алкоголь': false});
console.log(drinkStorage.getKeys());

const drinkStorage2 = new ClassB();
drinkStorage2.addValue('облепиховый чай', {'состав:': 'вода, черный чай, облепиха, апельсин', 'алкоголь': false});
console.log(drinkStorage2.getKeys());
console.log(drinkStorage2.getValue('облепиховый чай'));
console.log(drinkStorage2.deleteValue('компот'));
console.log(drinkStorage2.deleteValue('облепиховый чай'));
console.log(drinkStorage2.getKeys());
drinkStorage2.addValue('латте', {'состав:': 'вода, кофе, сахар, молоко', 'алкоголь': false});
drinkStorage2.addValue('чай каркаде', {'состав:': 'вода, каркаде', 'алкоголь': false});
console.log(drinkStorage2.getKeys());
console.log(drinkStorage2.getEntries());