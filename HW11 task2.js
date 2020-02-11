class HashStorageFunc {
    constructor() {
        this._hash = {};
    }

    addValue(key, value) {
        this._hash[key] = value;
    }

    getValue(key) {
        return this._hash[key];
    }

    deleteValue(key) {
        if (key in this._hash) {
            return delete this._hash[key];
        }
        return false;
    }

    getKeys() {
        return Object.keys(this._hash);
    }
}

class ClassA extends HashStorageFunc {
    constructor(hashTitle) {
        super();
        this.hashTitle = hashTitle;
    }

    deleteValue(key) {
        const result = super.deleteValue(key);
        return result ? 'значение удалено' : 'такого значения нет';
    }
}

class ClassB extends HashStorageFunc {
    constructor() {
        super();
    }

    getEntries() {
        return Object.entries(this._hash);
    }

    addValue(key, value) {
        super.addValue(key, value);
        return 'значение добавлено';
    }
}

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