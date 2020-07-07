"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    //new instance if is null
    Singleton.getInstance = function () {
        if (!Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
