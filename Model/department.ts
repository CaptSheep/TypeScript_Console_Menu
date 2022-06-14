export class Department {
  id: string;
  buildingId: string;
  cityId: string;
  name: string;

  constructor(
    id?: string,
    buildingId?: string,
    cityId?: string,
    name?: string,
   
  ) {
    this.id = id;
    this.buildingId = buildingId;
    this.cityId = cityId;
    this.name = name;

  }
  getId() {
    return this.id;
  }
  setId(id: string) {
    this.id = id;
  }
  getBuildingId() {
    return this.buildingId;
  }
  setBuildingId(buildingId: string) {
    this.buildingId = buildingId;
  }
  getCityId() {
    return this.cityId;
  }
  setCityId(cityId: string) {
    this.cityId = cityId;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
 
}
