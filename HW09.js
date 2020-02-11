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

const drinkStorage = new HashStorageFunc();
drinkStorage.addValue('морс', {'состав:': 'вода, варенье', 'алкоголь': false});
console.log(drinkStorage.getKeys());
console.log(drinkStorage.getValue('морс'));
console.log(drinkStorage.deleteValue('компот'));
console.log(drinkStorage.deleteValue('морс'));
console.log(drinkStorage.getKeys());
drinkStorage.addValue('компот', {'состав:': 'вода, фрукты', 'алкоголь': false});
drinkStorage.addValue('каппучино', {'состав:': 'вода, кофе, сахар, молоко', 'алкоголь': false});
console.log(drinkStorage.getKeys());