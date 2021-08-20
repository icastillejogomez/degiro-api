"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeGiroTypes = exports.DeGiroEnums = void 0;
require('es6-promise').polyfill();
require('isomorphic-fetch');
var DeGiro_1 = require("./DeGiro");
var DeGiroEnums = require("./enums/");
exports.DeGiroEnums = DeGiroEnums;
var DeGiroTypes = require("./types/");
exports.DeGiroTypes = DeGiroTypes;
exports.default = DeGiro_1.DeGiro;
//# sourceMappingURL=main.js.map