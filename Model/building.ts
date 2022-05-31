export class Building {
  id: string;
  cityId: string;
  name: string;
  constructor(id ?: string, cityID ?: string, name?: string) {
    this.id = id;
    this.cityId =cityID;
    this.name = name
  }
  getId() {
    return this.id;
  }
  setId(id: string) {
    this.id = id;
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
