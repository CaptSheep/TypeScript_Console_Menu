"use strict";
exports.__esModule = true;
exports.City = void 0;
var City = /** @class */ (function () {
    function City(id, name) {
        this.id = id;
        this.name = name;
    }
    City.prototype.getId = function () {
        return this.id;
    };
    City.prototype.setId = function (id) {
        this.id = id;
    };
    City.prototype.getName = function () {
        return this.name;
    };
    City.prototype.setName = function (name) {
        this.name = name;
    };
    return City;
}());
exports.City = City;
