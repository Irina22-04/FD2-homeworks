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