function HashStorageFunc() {
    this._hash = {};
}

HashStorageFunc.prototype.addValue = function (key, value) {
    this._hash[key] = value;
};

HashStorageFunc.prototype.getValue = function (key) {
    return this._hash[key];
};

HashStorageFunc.prototype.deleteValue = function (key) {
    if (key in this._hash) {
        return delete this._hash[key];
    }
    return false;
};

HashStorageFunc.prototype.getKeys = function () {
    return Object.keys(this._hash);
};

function ClassA(hashTitle) {
    HashStorageFunc.call(this);
    this.hashTitle = hashTitle;
}

ClassA.prototype = Object.create(HashStorageFunc.prototype);
ClassA.prototype.constructor = ClassA;

ClassA.prototype.deleteValue = function (key) {
    const result = HashStorageFunc.prototype.deleteValue.call(this, key);
    return result ? 'значение удалено' : 'такого значения нет';
};

function ClassB() {
    HashStorageFunc.call(this);
}

ClassB.prototype = Object.create(HashStorageFunc.prototype);
ClassB.prototype.constructor = ClassB;

ClassB.prototype.getEntries = function () {
    return Object.entries(this._hash);
};

ClassB.prototype.addValue = function (key, value) {
    HashStorageFunc.prototype.addValue.call(this, key, value);
    return 'значение добавлено';
};

const drinkStorage = new ClassA('напитки');
drinkStorage.addValue('морс', {'состав:': 'вода, ягоды', 'алкоголь': false});
console.log(drinkStorage.getKeys());
console.log(drinkStorage.getValue('морс'));
console.log(drinkStorage.deleteValue('компот'));
console.log(drinkStorage.deleteValue('морс'));
console.log(drinkStorage.getKeys());
drinkStorage.addValue('компот', {'состав:': 'вода, фрукты', 'алкоголь': false});
drinkStorage.addValue('каппучино', {'состав:': 'вода, кофе, сахар, молоко', 'алкоголь': false});
console.log(drinkStorage.getKeys());
console.log(drinkStorage.hashTitle);

const drinkStorage2 = new ClassB();
drinkStorage2.addValue('облепиховый чай', {'состав:': 'вода, черный чай, облепиха, апельсин', 'алкоголь': false});
console.log(drinkStorage2.getKeys());
console.log(drinkStorage2.getValue('облепиховый чай'));
console.log(drinkStorage2.deleteValue('компот'));
console.log(drinkStorage2.deleteValue('облепиховый чай'));
console.log(drinkStorage2.getKeys());
console.log(drinkStorage2.addValue('латте', {'состав:': 'вода, кофе, сахар, молоко', 'алкоголь': false}));
console.log(drinkStorage2.addValue('чай каркаде', {'состав:': 'вода, каркаде', 'алкоголь': false}));
console.log(drinkStorage2.getKeys());
console.log(drinkStorage2.getEntries());