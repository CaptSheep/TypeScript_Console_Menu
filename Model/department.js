"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, buildingId, cityId, name) {
        this.id = id;
        this.buildingId = buildingId;
        this.cityId = cityId;
        this.name = name;
    }
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.setId = function (id) {
        this.id = id;
    };
    Department.prototype.getBuildingId = function () {
        return this.buildingId;
    };
    Department.prototype.setBuildingId = function (buildingId) {
        this.buildingId = buildingId;
    };
    Department.prototype.getCityId = function () {
        return this.cityId;
    };
    Department.prototype.setCityId = function (cityId) {
        this.cityId = cityId;
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setName = function (name) {
        this.name = name;
    };
    return Department;
}());
exports.Department = Department;
