import { Employee } from "../Model/employee";
import { DepartmentManager } from "../Controller/departmentManager";
import * as fs from "fs";
import * as rsLib from "readline-sync";
 let departmentManager = new DepartmentManager();
export class EmployeeManager {
  saveFile(data: Employee[]) {
    const strData = JSON.stringify(data);

    fs.writeFileSync("./data.json", strData);
  }
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
  arrEmployee = this.loadFile();
  constructor() {
    this.init();
  }
  init() {
    let userAnswer: number = 0;
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
      let userAnswer = parseInt(rsLib.question("Lua chon cua ban la : "));

      switch (userAnswer) {
        case 1: {
          this.printEmployee(this.arrEmployee);
          break;
        }
        case 2: {
          this.addEmployee();
          break;
        }
        case 3: {
          let employeeName = rsLib.question("Nhap ten nhan vien muon tim : ");
          this.findEmployeeByName(employeeName);
          break;
        }
        case 4 : 
        {
          let buildingId = rsLib.question("Nhap id toa nha muon tim : ");
          departmentManager.findEmployeeByBuildingId(buildingId);
          break;
        }
        case 6 :
          {
                let employeeId = rsLib.question("Nhap id nhan vien : ");
                this.updateEmployee(employeeId)
                break;
          }
          case 7 :
            {
              let employeeId = rsLib.question('Nhap id nhan vien can xoa : ');
              this.deleteEmployee(employeeId);
            }
      }
      userAnswer++;
    }
    this.init();
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
    this.printEmployee(this.arrEmployee);
  }
  findEmployeeByName(name :string) {
    let employees: Employee[] = [];
    this.arrEmployee.forEach((data : Employee) => {
      if (data.name.includes(name)) {
        employees.push(data);
      }
    });
    console.table(employees);
  }
  updateEmployee ( id : string)
  {
    let departmentId = rsLib.question("Nhap id phong ban: ");
    let buildingId = rsLib.question("Nhap id cua toa nha : ");
    let cityID = rsLib.question("Nhap id cua thanh pho : ");
    let employeeName = rsLib.question("Nhap ten nhan vien : ");
    let employeeAddress = rsLib.question("Nhap dia chi nhan vien : ");
    let employeeAge = rsLib.question("Nhap tuoi cua nhan vien : ");
    let employeeEmail = rsLib.question("Nhap email nhan vien : ");
    let employeePhone = rsLib.question("Nhap so dien thoai nhan vien : ");
    this.arrEmployee.filter((item)=>{
      if ( item.id == id)
      {
        item.setDepartmentId(departmentId);
        item.setBuildingId(buildingId);
        item.setCityId(cityID);
        item.setName(employeeName);
        item.setAddress(employeeAddress);
        item.setAge(employeeAge);
        item.setEmail(employeeEmail);
        item.setPhone(employeePhone);
      }
    })
    this.printEmployee(this.arrEmployee)
  }
  deleteEmployee(id:string)
  {
    let index =this.arrEmployee.findIndex((item)=>{
      return item.id == id;
    })
    if(index !== -1)
    {
      this.arrEmployee.splice(index,1)
    }
  }

  printEmployee(employees: Employee[]) {
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      console.log(
        `Id : ${employee.id} DepartmentId : ${employee.departmentId} BuildingId : ${employee.buildingId} CityId : ${employee.cityID} Name : ${employee.name} Address : ${employee.address} Age: ${employee.age} Email : ${employee.email} Phone : ${employee.phone} `
      );
    }
    console.table(employees);
  }
}
