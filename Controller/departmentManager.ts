import * as rsLib from "readline-sync";
import * as fs from "fs";
import { EmployeeManager } from "./employeeManager";

import { Department } from "../Model/department";
export class DepartmentManager {
  employeeManager = new EmployeeManager()
  public departments: any = [];
  
  constructor() {
   
  }
  loadData() {
     const strData: string = fs.readFileSync("./department.json").toString();
     if (strData === "") return [];

     let arrDepartment = JSON.parse(strData);
     for (let i = 0; i < arrDepartment.length; i++) {
       const objData = arrDepartment[i];
       let newDepartment = new Department(
          objData.id,
          objData.buildingId,
          objData.cityId,
          objData.name,
       );
       this.departments.push(newDepartment);
     }
  }
  findDepartment(id: string) {
    let i = -1
    this.departments.forEach((employee: any, index: number) => {
      if (employee.departmentId === id) {
       i = index
      }
    });
    return i;
  }
  
  deleteDepartment(id: string){
    let index: number = this.findDepartment(id);
    this.employeeManager.deleteEmployeeByDepartmentId(id);
    this.departments.splice(index,1);
    this.employeeManager.saveFile();
    console.table(this.employeeManager.arrEmployee);
  }
  
}
