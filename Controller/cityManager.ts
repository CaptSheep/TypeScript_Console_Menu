import { EmployeeManager } from "./employeeManager";

export class CityManager {
  public cities: any = [];
  employeeManager = new EmployeeManager()
  constructor() {}
  findCity(id : string)
  {
    let i = -1;
    this.cities.forEach((item: any, index : number)=>{
      if(item.cityID === id)
      {
        i = index;
      }
    })
    return i
  }
  deleteEmployeeByCityId(id : string)
  {
    let cityId = this.findCity(id)
    this.employeeManager.deleteEmployeeByBuildingId(id)
    this.cities.splice(cityId,1);
    this.employeeManager.saveFile();
    console.table(this.employeeManager.arrEmployee)
  }
}
