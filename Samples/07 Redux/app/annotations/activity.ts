export function Activity() {
    return function(target, prop) {
        // const original = target[prop];
        //
        // return target[prop] = function() {
        //     const name = target.constructor.name + "." + prop;
        //     console.log("BEGIN", name);
        //
        //     const before = performance.now();
        //     const retVal = original.apply(this, arguments);
        //     const after = performance.now();
        //
        //     console.log("END", name, (after-before));
        //
        //     return retVal;
        // }
    }
}
