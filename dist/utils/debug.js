"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
var DEBUG = !!process.env.DEGIRO_DEBUG;
exports.debug = DEBUG ? function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return console.log.apply(console, s);
} : function () { };
//# sourceMappingURL=debug.js.map