class deepClone {
    clone(source) {
        if (source instanceof Object) {
            let copy;
            if (source instanceof Array) {
                copy = [];
            } else if (source instanceof Function) {
                copy = function () {
                    return source.call(this, ...arguments);
                }
            } else if (source instanceof Date) {
                copy = new Date(source);
            }else {
                copy = {};
            }
            for (let key in source) {
                copy[key] = this.clone(source[key]);
            }
            return copy;
        } else {
            return source;
        }
    }
}