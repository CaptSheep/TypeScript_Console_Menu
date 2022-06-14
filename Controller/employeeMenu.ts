import { EmployeeManager } from "./employeeManager";
import * as rsLib from "readline-sync";
import { DepartmentManager } from "./departmentManager";
import { BuildingManager } from "./buildingManager";
export class EmployeeMenu {
  employeeManager = new EmployeeManager();
  departmentManager = new DepartmentManager();
  buildingManager = new BuildingManager()
  constructor() {
    this.init();
  }
  init() {
    let userAnswer: number = 0;
    while (userAnswer < 1 || userAnswer > 10) {
      console.clear();
      console.log("Nhap vao lua chon cua ban : ");
      console.log("1. Hien thi toan bo nhan vien");
      console.log("2. Them nhan vien");
      console.log("3. Tim nhan vien ");
      console.log("4. Tim nhan vien theo phong ban ");
      console.log("5. Tim nhan vien theo thanh pho ");
      console.log("6. Tim toa nha theo thanh pho ");
      console.log("7. Cap nhat nhan vien ");
      console.log("8. Xoa toa nha  ");
      console.log("9. Xoa phong ban  ");
      console.log("10. Xoa nhan vien");
      this.employeeManager.saveFile();
      userAnswer = parseInt(rsLib.question("Lua chon cua ban la : "));
    }
    switch (userAnswer) {
      case 1: {
        this.employeeManager.printEmployee();
        break;
      }
      case 2: {
        this.employeeManager.addEmployee();
        break;
      }
      case 3: {
        let employeeName = rsLib.question("Nhap ten nhan vien muon tim : ");
        this.employeeManager.findEmployeeByName(employeeName);
        break;
      }
      case 4: {
        let buildingId = rsLib.question("Nhap id toa nha muon tim : ");
        this.employeeManager.findEmployeeByDepartmentId(buildingId);
        break;
      }
      case 5 :
        {
          let cityId = rsLib.question('Nhap id thanh pho :');
          this.employeeManager.findEmoloyeeByCityId(cityId);
          break;
        }
      case 6 :
        {
          let cityId = rsLib.question('Nhap id thanh pho can tim : ');
          this.buildingManager.findBuildingByCityId(cityId)
          break;
        }
      case 7: {
        let employeeId = rsLib.question("Nhap id nhan vien : ");
        this.employeeManager.updateEmployee(employeeId);
        this.employeeManager.saveFile();
        break;
      }
      case 8: {
        let buildingId: any = rsLib.question("Nhap id toa nha :");
        this.buildingManager.deleteEmployeeByBuilding(buildingId)
        break;
      }
      case 9 :
        {
          let departmentId : any = rsLib.question('Nhap id phong ban can xoa : ');
          this.departmentManager.deleteDepartment(departmentId);
          
          break;
        }
      case 10: {
        let employeeId = rsLib.question("Nhap id nhan vien can xoa : ");
        this.employeeManager.deleteEmployee(employeeId);
        break;
      }
    }
  }
}
