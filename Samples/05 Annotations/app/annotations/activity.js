"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Activity() {
    return function (target, prop) {
        var original = target[prop];
        return target[prop] = function () {
            var name = target.constructor.name + "." + prop;
            console.log("BEGIN", name);
            var before = performance.now();
            var retVal = original.apply(this, arguments);
            var after = performance.now();
            console.log("END", name, (after - before));
            return retVal;
        };
    };
}
exports.Activity = Activity;
