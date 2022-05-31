"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, departmentId, buildingId, cityId, name, age, address, email, phone) {
        this.id = id;
        this.departmentId = departmentId;
        this.buildingId = buildingId;
        this.cityID = cityId;
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.setId = function (id) {
        this.id = id;
    };
    Employee.prototype.getDepartmentId = function () {
        return this.departmentId;
    };
    Employee.prototype.setDepartmentId = function (departmentId) {
        this.departmentId = departmentId;
    };
    Employee.prototype.getBuildingId = function () {
        return this.buildingId;
    };
    Employee.prototype.setBuildingId = function (id) {
        this.buildingId = id;
    };
    Employee.prototype.getCityId = function () {
        return this.cityID;
    };
    Employee.prototype.setCityId = function (cityId) {
        this.cityID = cityId;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.getPhone = function () {
        return this.phone;
    };
    Employee.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    Employee.prototype.loadData = function (id, departmentId, buildingId, cityId, name, address, age, email, phone) {
        this.id = id;
        this.departmentId = departmentId;
        this.buildingId = buildingId;
        this.cityID = cityId;
        this.name = name;
        this.address = address;
        this.age = age;
        this.email = email;
        this.phone = phone;
    };
    return Employee;
}());
exports.Employee = Employee;
