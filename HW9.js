function HashStorageFunc() {
    this.hash = {};
    this.addValue = function (key, value) {
        this.hash[key] = value;
    };
    this.getValue = function (key) {
        return this.hash[key];
    };
    this.deleteValue = function (key) {
        if (key in this.hash) {
            return delete this.hash[key];
        }
        return false;
    };
    this.getKeys = function () {
        return Object.keys(this.hash);
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