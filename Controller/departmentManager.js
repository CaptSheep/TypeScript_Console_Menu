"use strict";
exports.__esModule = true;
exports.DepartmentManager = void 0;
var fs = require("fs");
var employeeManager_1 = require("./employeeManager");
var department_1 = require("../Model/department");
var DepartmentManager = /** @class */ (function () {
    function DepartmentManager() {
        this.employeeManager = new employeeManager_1.EmployeeManager();
        this.departments = [];
    }
    DepartmentManager.prototype.loadData = function () {
        var strData = fs.readFileSync("./department.json").toString();
        if (strData === "")
            return [];
        var arrDepartment = JSON.parse(strData);
        for (var i = 0; i < arrDepartment.length; i++) {
            var objData = arrDepartment[i];
            var newDepartment = new department_1.Department(objData.id, objData.buildingId, objData.cityId, objData.name);
            this.departments.push(newDepartment);
        }
    };
    DepartmentManager.prototype.findDepartment = function (id) {
        var i = -1;
        this.departments.forEach(function (employee, index) {
            if (employee.departmentId === id) {
                i = index;
            }
        });
        return i;
    };
    DepartmentManager.prototype.deleteDepartment = function (id) {
        var index = this.findDepartment(id);
        this.employeeManager.deleteEmployeeByDepartmentId(id);
        this.departments.splice(index, 1);
        this.employeeManager.saveFile();
        console.table(this.employeeManager.arrEmployee);
    };
    return DepartmentManager;
}());
exports.DepartmentManager = DepartmentManager;
