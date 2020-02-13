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
}

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
}