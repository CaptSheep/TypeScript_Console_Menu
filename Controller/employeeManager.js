"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var employee_1 = require("../Model/employee");
var departmentManager_1 = require("../Controller/departmentManager");
var fs = require("fs");
var rsLib = require("readline-sync");
var departmentManager = new departmentManager_1.DepartmentManager();
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.arrEmployee = this.loadFile();
        this.init();
    }
    EmployeeManager.prototype.saveFile = function (data) {
        var strData = JSON.stringify(data);
        fs.writeFileSync("./data.json", strData);
    };
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
    EmployeeManager.prototype.init = function () {
        var userAnswer = 0;
        while (userAnswer > 0 || userAnswer < 10) {
            console.clear();
            this.printEmployee(this.arrEmployee);
            console.log("Nhap vao lua chon cua ban : ");
            console.log("1. Hien thi toan bo nhan vien");
            console.log("2. Them nhan vien");
            console.log("3. Tim nhan vien ");
            console.log("4. Tim nhan vien theo toa nha ");
            console.log("5. Tim toa nha theo thanh pho ");
            console.log("6. Sua nhan vien ");
            console.log("7. Xoa nhan vien");
            this.saveFile(this.arrEmployee);
            var userAnswer_1 = parseInt(rsLib.question("Lua chon cua ban la : "));
            switch (userAnswer_1) {
                case 1: {
                    this.printEmployee(this.arrEmployee);
                    break;
                }
                case 2: {
                    this.addEmployee();
                    break;
                }
                case 3: {
                    var employeeName = rsLib.question("Nhap ten nhan vien muon tim : ");
                    this.findEmployeeByName(employeeName);
                    break;
                }
                case 4:
                    {
                        var buildingId = rsLib.question("Nhap id toa nha muon tim : ");
                        departmentManager.findEmployeeByBuildingId(buildingId);
                        break;
                    }
                case 6:
                    {
                        var employeeId = rsLib.question("Nhap id nhan vien : ");
                        this.updateEmployee(employeeId);
                        break;
                    }
                case 7:
                    {
                        var employeeId = rsLib.question('Nhap id nhan vien can xoa : ');
                        this.deleteEmployee(employeeId);
                    }
            }
            userAnswer_1++;
        }
        this.init();
    };
    EmployeeManager.prototype.addEmployee = function () {
        var employeeId = rsLib.question("Nhap id nhan vien : ");
        var departmentId = rsLib.question("Nhap id phong ban: ");
        var buildingId = rsLib.question("Nhap id cua toa nha : ");
        var cityID = rsLib.question("Nhap id cua thanh pho : ");
        var employeeName = rsLib.question("Nhap ten nhan vien : ");
        var employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
        var employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
        var employeeEmail = rsLib.question("Nhap email nhan vien : ");
        var employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
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
        this.arrEmployee.push(employeeObj);
        this.printEmployee(this.arrEmployee);
    };
    EmployeeManager.prototype.findEmployeeByName = function (name) {
        var employees = [];
        this.arrEmployee.forEach(function (data) {
            if (data.name.includes(name)) {
                employees.push(data);
            }
        });
        console.table(employees);
    };
    EmployeeManager.prototype.updateEmployee = function (id) {
        var departmentId = rsLib.question("Nhap id phong ban: ");
        var buildingId = rsLib.question("Nhap id cua toa nha : ");
        var cityID = rsLib.question("Nhap id cua thanh pho : ");
        var employeeName = rsLib.question("Nhap ten nhan vien : ");
        var employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
        var employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
        var employeeEmail = rsLib.question("Nhap email nhan vien : ");
        var employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
        this.arrEmployee.filter(function (item) {
            if (item.id == id) {
                item.setDepartmentId(departmentId);
                item.setBuildingId(buildingId);
                item.setCityId(cityID);
                item.setName(employeeName);
                item.setAddress(employeeAddress);
                item.setAge(employeeAge);
                item.setEmail(employeeEmail);
                item.setPhone(employeePhone);
            }
        });
        this.printEmployee(this.arrEmployee);
    };
    EmployeeManager.prototype.deleteEmployee = function (id) {
        var index = this.arrEmployee.findIndex(function (item) {
            return item.id == id;
        });
        if (index !== -1) {
            this.arrEmployee.splice(index, 1);
        }
    };
    EmployeeManager.prototype.printEmployee = function (employees) {
        for (var i = 0; i < employees.length; i++) {
            var employee = employees[i];
            console.log("Id : ".concat(employee.id, " DepartmentId : ").concat(employee.departmentId, " BuildingId : ").concat(employee.buildingId, " CityId : ").concat(employee.cityID, " Name : ").concat(employee.name, " Address : ").concat(employee.address, " Age: ").concat(employee.age, " Email : ").concat(employee.email, " Phone : ").concat(employee.phone, " "));
        }
        console.table(employees);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
