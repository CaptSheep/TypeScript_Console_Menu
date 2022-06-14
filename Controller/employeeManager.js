"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var employee_1 = require("../Model/employee");
var fs = require("fs");
var rsLib = require("readline-sync");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.arrEmployee = [];
        this.arrEmployee = this.loadFile();
    }
    EmployeeManager.prototype.loadFile = function () {
        var strData = fs.readFileSync("./data.json").toString();
        if (strData === "")
            return [];
        var result = [];
        var arrEmployee = JSON.parse(strData);
        for (var i = 0; i < arrEmployee.length; i++) {
            var objData = arrEmployee[i];
            var newEmployee = new employee_1.Employee();
            newEmployee.loadData(objData.id, objData.departmentId, objData.buildingId, objData.cityID, objData.name, objData.address, objData.age, objData.email, objData.phone);
            result.push(newEmployee);
        }
        return result;
    };
    EmployeeManager.prototype.saveFile = function () {
        var strData = JSON.stringify(this.arrEmployee);
        fs.writeFileSync("./data.json", strData);
    };
    EmployeeManager.prototype.addEmployee = function () {
        var _this = this;
        var employeeId = rsLib.question("Nhap id nhan vien : ");
        var departmentId = rsLib.question("Nhap id phong ban: ");
        var buildingId = rsLib.question("Nhap id cua toa nha : ");
        var cityID = rsLib.question("Nhap id cua thanh pho : ");
        var employeeName = rsLib.question("Nhap ten nhan vien : ");
        var employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
        var employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
        var employeeEmail = rsLib.question("Nhap email nhan vien : ");
        var employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
        var flag = false;
        this.arrEmployee.forEach(function (item) {
            if (item.id == employeeId) {
                flag = true;
            }
            if (flag) {
                throw new Error("Trung id nhan vien");
            }
            else {
                var employeeObj = new employee_1.Employee();
                employeeObj.setId(employeeId);
                employeeObj.setDepartmentId(departmentId);
                employeeObj.setBuildingId(buildingId);
                employeeObj.setCityId(cityID);
                employeeObj.setName(employeeName);
                employeeObj.setAddress(employeeAddress);
                employeeObj.setAge(employeeAge);
                employeeObj.setEmail(employeeEmail);
                employeeObj.setPhone(employeePhone);
                _this.arrEmployee.push(employeeObj);
                _this.saveFile();
                _this.printEmployee();
            }
        });
    };
    EmployeeManager.prototype.findEmployeeByName = function (name) {
        var check = false;
        var employees = [];
        this.arrEmployee.forEach(function (data) {
            var fullName = data.getName();
            if (fullName.includes(name)) {
                check = true;
                employees.push(data);
            }
        });
        if (!check) {
            throw new Error("Khong the tim thay nhan vien");
        }
        console.log("Nhan vien can tim la");
        console.table(employees);
    };
    EmployeeManager.prototype.updateEmployee = function (id) {
        this.arrEmployee.filter(function (item) {
            if (item.id == id) {
                var departmentId = rsLib.question("Nhap id phong ban: ");
                var buildingId = rsLib.question("Nhap id cua toa nha : ");
                var cityID = rsLib.question("Nhap id cua thanh pho : ");
                var employeeName = rsLib.question("Nhap ten nhan vien : ");
                var employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
                var employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
                var employeeEmail = rsLib.question("Nhap email nhan vien : ");
                var employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
                item.setDepartmentId(departmentId);
                item.setBuildingId(buildingId);
                item.setCityId(cityID);
                item.setName(employeeName);
                item.setAge(employeeAge);
                item.setAddress(employeeAddress);
                item.setEmail(employeeEmail);
                item.setPhone(employeePhone);
            }
            else {
                throw new Error("Khong co nhan vien co id vua nhap !");
            }
        });
        this.printEmployee();
    };
    EmployeeManager.prototype.deleteEmployee = function (id) {
        var index = this.arrEmployee.findIndex(function (item) {
            return item.id == id;
        });
        if (index !== -1) {
            this.arrEmployee.splice(index, 1);
        }
        else {
            throw new Error("Khong co nhan vien nao co id vua tim");
        }
        this.saveFile();
        console.table(this.arrEmployee);
    };
    EmployeeManager.prototype.deleteEmployeeByDepartmentId = function (id) {
        var i = 0, j = this.arrEmployee.length - 1;
        while (i <= j) {
            if (this.arrEmployee.at(i).departmentId === id) {
                this.arrEmployee.splice(i, 1);
                j--;
            }
            else {
                i++;
            }
        }
    };
    EmployeeManager.prototype.deleteEmployeeByBuildingId = function (id) {
        var i = 0, j = this.arrEmployee.length - 1;
        while (i <= j) {
            if (this.arrEmployee.at(i).buildingId === id) {
                this.arrEmployee.splice(i, 1);
                j--;
            }
            else {
                i++;
            }
        }
    };
    EmployeeManager.prototype.deleteEmployeeByCityId = function (id) {
        var i = 0, j = this.arrEmployee.length;
        while (i <= j) {
            if (this.arrEmployee.at(i).cityID === id) {
                this.arrEmployee.splice(i, 1);
                j--;
            }
            else {
                i++;
            }
        }
    };
    EmployeeManager.prototype.printEmployee = function () {
        for (var i = 0; i < this.arrEmployee.length; i++) {
            var employee = this.arrEmployee[i];
            console.log("Id : ".concat(employee.id, " DepartmentId : ").concat(employee.departmentId, " BuildingId : ").concat(employee.buildingId, " CityId : ").concat(employee.cityID, " Name : ").concat(employee.name, " Address : ").concat(employee.address, " Age: ").concat(employee.age, " Email : ").concat(employee.email, " Phone : ").concat(employee.phone, " "));
        }
        console.table(this.arrEmployee);
    };
    EmployeeManager.prototype.findEmployeeByDepartmentId = function (departmentId) {
        var res = Array();
        this.arrEmployee.forEach(function (item) {
            if (item.departmentId.includes(departmentId)) {
                res.push(item);
            }
        });
        console.log("Nhan vien can tim la");
        if (res.length == 0) {
            console.log("khong co nhan vien");
        }
        else {
            console.table(res);
        }
    };
    EmployeeManager.prototype.findEmoloyeeByCityId = function (id) {
        var arr = Array();
        this.arrEmployee.forEach(function (item) {
            if (item.cityID.includes(id)) {
                arr.push(item);
            }
        });
        console.log("Nhan vien can tim la");
        if (arr.length == 0) {
            console.log("khong co nhan vien");
        }
        else {
            console.table(arr);
        }
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
