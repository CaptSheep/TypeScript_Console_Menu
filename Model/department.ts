export class Department {
  id: string;
  buildingId: string;
  cityId: string;
  name: string;
  numberOfEmployee: string;
  constructor(
    id?: string,
    buildingId?: string,
    cityId?: string,
    name?: string,
    numberOfEmployee?: string
  ) {
    this.id = id;
    this.buildingId = buildingId;
    this.cityId = cityId;
    this.name = name;
    this.numberOfEmployee = numberOfEmployee;
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
  getNumberOfEmployee() {
    return this.numberOfEmployee;
  }
  setNumberOfEmoloyee(numberOfEmployee: string) {
    this.numberOfEmployee = numberOfEmployee;
  }
}
