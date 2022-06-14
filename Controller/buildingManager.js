"use strict";
exports.__esModule = true;
exports.BuildingManager = void 0;
var employeeManager_1 = require("./employeeManager");
var BuildingManager = /** @class */ (function () {
    function BuildingManager() {
        this.employeeManager = new employeeManager_1.EmployeeManager();
        this.buildings = [];
    }
    BuildingManager.prototype.findBuilding = function (id) {
        var i = -1;
        this.buildings.forEach(function (employee, index) {
            if (employee.buildingId === id) {
                i = index;
            }
        });
        return i;
    };
    BuildingManager.prototype.deleteEmployeeByBuilding = function (id) {
        var buildingId = this.findBuilding(id);
        this.employeeManager.deleteEmployeeByBuildingId(id);
        this.buildings.splice(buildingId, 1);
        this.employeeManager.saveFile();
        console.table(this.employeeManager.arrEmployee);
    };
    BuildingManager.prototype.findBuildingByCityId = function (id) {
        var newArr = Array();
        this.employeeManager.arrEmployee.forEach(function (item) {
            if (item.cityID.includes(id)) {
                newArr.push(item);
            }
        });
        console.log('Ket qua la :  ');
        if (newArr.length === 0) {
            console.log('Khong co toa nha nao trong thanh pho ');
        }
        else {
            console.table(newArr);
        }
    };
    return BuildingManager;
}());
exports.BuildingManager = BuildingManager;
