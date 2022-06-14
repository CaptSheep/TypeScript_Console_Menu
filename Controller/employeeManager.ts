import { Employee } from "../Model/employee";
import * as fs from "fs";
import * as rsLib from "readline-sync";

export class EmployeeManager {
  loadFile(): Employee[] {
    const strData: string = fs.readFileSync("./data.json").toString();
    if (strData === "") return [];
    let result: Employee[] = [];
    let arrEmployee = JSON.parse(strData);
    for (let i = 0; i < arrEmployee.length; i++) {
      const objData = arrEmployee[i];
      let newEmployee = new Employee();
      newEmployee.loadData(
        objData.id,
        objData.departmentId,
        objData.buildingId,
        objData.cityID,
        objData.name,
        objData.address,
        objData.age,
        objData.email,
        objData.phone
      );
      result.push(newEmployee);
    }
    return result;
  }

  arrEmployee: Employee[] = [];
  saveFile() {
    const strData = JSON.stringify(this.arrEmployee);

    fs.writeFileSync("./data.json", strData);
  }
  constructor() {
    this.arrEmployee = this.loadFile();
  }
  addEmployee() {
    let employeeId = rsLib.question("Nhap id nhan vien : ");
    let departmentId = rsLib.question("Nhap id phong ban: ");
    let buildingId = rsLib.question("Nhap id cua toa nha : ");
    let cityID = rsLib.question("Nhap id cua thanh pho : ");
    let employeeName = rsLib.question("Nhap ten nhan vien : ");
    let employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
    let employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
    let employeeEmail = rsLib.question("Nhap email nhan vien : ");
    let employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
    let flag = false;
    this.arrEmployee.forEach((item: any) => {
      if (item.id == employeeId) {
        flag = true;
      }
      if (flag) {
        throw new Error("Trung id nhan vien");
      } else {
        let employeeObj = new Employee();
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
        this.saveFile();
        this.printEmployee();
      }
    });
  }
  findEmployeeByName(name: string): void {
    let check = false;
    let employees: Employee[] = [];
    this.arrEmployee.forEach((data: Employee) => {
      let fullName = data.getName();
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
  }

  updateEmployee(id: string): void {
    this.arrEmployee.filter((item) => {
      if (item.id == id) {
        let departmentId = rsLib.question("Nhap id phong ban: ");
        let buildingId = rsLib.question("Nhap id cua toa nha : ");
        let cityID = rsLib.question("Nhap id cua thanh pho : ");
        let employeeName = rsLib.question("Nhap ten nhan vien : ");
        let employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
        let employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
        let employeeEmail = rsLib.question("Nhap email nhan vien : ");
        let employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
        item.setDepartmentId(departmentId);
        item.setBuildingId(buildingId);
        item.setCityId(cityID);
        item.setName(employeeName);
        item.setAge(employeeAge);
        item.setAddress(employeeAddress);
        item.setEmail(employeeEmail);
        item.setPhone(employeePhone);
      } else {
        throw new Error("Khong co nhan vien co id vua nhap !");
      }
    });
    this.printEmployee();
  }
  deleteEmployee(id: string): void {
    let index = this.arrEmployee.findIndex((item) => {
      return item.id == id;
    });
    if (index !== -1) {
      this.arrEmployee.splice(index, 1);
    } else {
      throw new Error("Khong co nhan vien nao co id vua tim");
    }
    this.saveFile();
    console.table(this.arrEmployee);
  }

  deleteEmployeeByDepartmentId(id: string): void {
    let i = 0,
      j = this.arrEmployee.length - 1;
    while (i <= j) {
      if (this.arrEmployee.at(i).departmentId === id) {
        this.arrEmployee.splice(i, 1);
        j--;
      } else {
        i++;
      }
    }
  }
  deleteEmployeeByBuildingId(id: string) {
    let i = 0,
      j = this.arrEmployee.length - 1;
    while (i <= j) {
      if (this.arrEmployee.at(i).buildingId === id) {
        this.arrEmployee.splice(i, 1);
        j--;
      } else {
        i++;
      }
    }
  }
  deleteEmployeeByCityId(id: string) {
    let i = 0,
      j = this.arrEmployee.length;
    while (i <= j) {
      if (this.arrEmployee.at(i).cityID === id) {
        this.arrEmployee.splice(i, 1);
        j--;
      } else {
        i++;
      }
    }
  }

  printEmployee() {
    for (let i = 0; i < this.arrEmployee.length; i++) {
      const employee = this.arrEmployee[i];
      console.log(
        `Id : ${employee.id} DepartmentId : ${employee.departmentId} BuildingId : ${employee.buildingId} CityId : ${employee.cityID} Name : ${employee.name} Address : ${employee.address} Age: ${employee.age} Email : ${employee.email} Phone : ${employee.phone} `
      );
    }
    console.table(this.arrEmployee);
  }

  findEmployeeByDepartmentId(departmentId: string) {
    let res = Array();
    this.arrEmployee.forEach((item: Employee) => {
      if (item.departmentId.includes(departmentId)) {
        res.push(item);
      }
    });
    console.log("Nhan vien can tim la");
    if (res.length == 0) {
      console.log("khong co nhan vien");
    } else {
      console.table(res);
    }
  }
  findEmoloyeeByCityId(id: string) {
    let arr = Array();
    this.arrEmployee.forEach((item: Employee) => {
      if (item.cityID.includes(id)) {
        arr.push(item);
      }
    });
    console.log("Nhan vien can tim la");
    if (arr.length == 0) {
      console.log("khong co nhan vien");
    } else {
      console.table(arr);
    }
  }
}
