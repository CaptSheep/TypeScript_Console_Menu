
import { EmployeeManager } from "./employeeManager";

export class BuildingManager {
  employeeManager = new EmployeeManager()
  public buildings: any = [];
  constructor() {}
  
  findBuilding(id: string)
  {
    let i = -1 ;
    this.buildings.forEach((employee : any ,index : number)=>{
      if ( employee.buildingId === id )
      {
        i = index;
      }
    })
    return i
  }
  deleteEmployeeByBuilding(id:string)
  {
    let buildingId :number = this.findBuilding(id)
    this.employeeManager.deleteEmployeeByBuildingId(id)
    this.buildings.splice(buildingId,1)
    this.employeeManager.saveFile()
    console.table(this.employeeManager.arrEmployee)
  }
  findBuildingByCityId(id : string)
  {
    let newArr = Array()
    this.employeeManager.arrEmployee.forEach((item: any)=>{
      if (item.cityID.includes(id)) {
        newArr.push(item);
      }
    })
    console.log('Ket qua la :  ');
      if (newArr.length === 0) {
        console.log('Khong co toa nha nao trong thanh pho ')
      }
      else{
        console.table(newArr)
      }
  }

}
