import { Building } from "../Model/building";

export class BuildingManager {
  public buildings: any = [];
  constructor() {}
  addBuilding(building: Building) {
    let check = false;
    this.buildings.forEach((item) => {
      if (item.id === building.id) {
        check = true;
      }
    });
    if (check) {
      throw new Error("Can not Create Building");
    } else {
      this.buildings.push(building);
    }
  }
  findBuilding(id: string) {
    let i = -1;
    this.buildings.forEach((building: any, index: number) => {
      if (building.id === id) {
        i = index;
      }
    });
    return i;
  }
  findBuildingByCity(id: string) {
    let arr = [];
    this.buildings.forEach((building: any) => {
      if (building.cityId === id) {
        arr.push(building);
      }
    });
    return arr;
  }
  updateBuilding(building: Building) {
    let buildingId = this.findBuilding(building.id);
    if (buildingId !== -1) {
      this.buildings[buildingId].setName(building.name);
      this.buildings[buildingId].setCityId(building.cityId);
    }
  }
  deleteBuilding(id: string) {
    let buildingId = this.findBuilding(id);
    if (buildingId !== -1) {
      this.buildings.splice(buildingId, 1);
    } else {
      throw new Error("Can not Delete Building");
    }
  }
  detailBuilding(id: string) {
    let result: object = this.buildings.find((obj: any) => obj.id === id);
    return result;
  }
}
