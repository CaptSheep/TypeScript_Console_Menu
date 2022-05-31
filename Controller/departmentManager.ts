import { Employee } from "../Model/employee";
import {Department} from "../Model/department"
import { EmployeeManager } from "./employeeManager";
export class DepartmentManager {
  public departments: any = [];
  constructor() {}
  
  findEmployeeByBuildingId(buildingId : string)
  {
    let employeeManager = new EmployeeManager()
    let employee : Employee [] = employeeManager.loadFile()
    employee.forEach((item)=>{  
      if ( item.buildingId.includes(buildingId))
      {
        employee.push(item)
      }
    });
 
    return employee;
    
  }
  printDepartment(departments :Department[])
  {
    for ( let i = 0 ; i < departments.length; i ++)
    {
      const department = departments[i];
      console.log(`Department : ${department.name} NumberOfEmployee : ${department.numberOfEmployee} City : ${department.cityId}` )
    }
      console.table(departments);
  }
}
