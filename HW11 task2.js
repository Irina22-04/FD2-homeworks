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
    getEntries() {
        return Object.entries(this._hash);
    }

    addValue(key, value) {
        super.addValue(key, value);
        return 'значение добавлено';
    }
}
