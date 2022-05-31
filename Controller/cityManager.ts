import { City } from "../Model/city";

export class CityManager {
  public cities:any = [];
  constructor(
     
  ) {
    
  }
  addCity(city: City) {
    let check = false;
    this.cities.forEach((item) => {
      if (city.id === item.id) {
        check = true;
      }
    });
    if (check) {
      throw new Error("Can not Create City");
    } else {
      this.cities.push(city);
    }
  }
  findCity(id: string) {
    let i = -1;
    this.cities.forEach((cities: any, index: number) => {
      if (cities.id === id) {
        i = index;
      }
    });
    return i;
  }
  updateCity(city: City) {
    let cityId = this.findCity(city.id);
    {
      if (cityId !== -1) {
        this.cities[cityId].setName(city.name);
      }
      else {
        throw new Error('Can not Update City');
      }
    }
  }
  deleteCity(id: string) {
    let cityId = this.findCity(id);
    {
      if (cityId !== -1) {
        this.cities.splice(cityId, 1);
      } else {
        throw new Error("Can not Delete City");
      }
    }
  }
  detailCity(id: string) {
    let result: object = this.cities.find((obj: any) => obj.id == id);
    return result;
  }
}
