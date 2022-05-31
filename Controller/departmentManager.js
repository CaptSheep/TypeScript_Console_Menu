"use strict";
exports.__esModule = true;
exports.DepartmentManager = void 0;
var employeeManager_1 = require("./employeeManager");
var DepartmentManager = /** @class */ (function () {
    function DepartmentManager() {
        this.departments = [];
    }
    DepartmentManager.prototype.findEmployeeByBuildingId = function (buildingId) {
        var employeeManager = new employeeManager_1.EmployeeManager();
        var employee = employeeManager.loadFile();
        employee.forEach(function (item) {
            if (item.buildingId.includes(buildingId)) {
                employee.push(item);
            }
        });
        return employee;
    };
    DepartmentManager.prototype.printDepartment = function (departments) {
        for (var i = 0; i < departments.length; i++) {
            var department = departments[i];
            console.log("Department : ".concat(department.name, " NumberOfEmployee : ").concat(department.numberOfEmployee, " City : ").concat(department.cityId));
        }
        console.table(departments);
    };
    return DepartmentManager;
}());
exports.DepartmentManager = DepartmentManager;
