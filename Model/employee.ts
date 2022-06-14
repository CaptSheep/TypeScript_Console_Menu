export class Employee {
  id: string;
  departmentId: string;
  buildingId: string;
  cityID : string;
  name: string;
  age: string;
  address: string;
  email: string;
  phone: string;

  constructor(
    id?: string,
    departmentId?: string,
    buildingId ?: string,
    cityId ?: string,
    name?: string,
    age?: string,
    address?: string,
    email?: string,
    phone?: string
  ) {
    this.id =id
    this.departmentId = departmentId;
    this.buildingId = buildingId;
    this.cityID = cityId
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
  getId() {
    return this.id;
  }
  setId(id: string) {
    this.id = id;
  }
  getDepartmentId() {
    return this.departmentId;
  }
  setDepartmentId(departmentId: string) {
    this.departmentId = departmentId;
  }
  getBuildingId()
  {
    return this.buildingId;
  }
  setBuildingId(id : string)
  {
    this.buildingId = id;
  }
  getCityId()
  {
    return this.cityID;
  }
  setCityId(cityId : string)
  {
    this.cityID =cityId
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age: string) {
    this.age = age;
  }
  getAddress() {
    return this.address;
  }
  setAddress(address: string) {
    this.address = address;
  }
  setEmail(email: string) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
  setPhone(phone: string) {
    this.phone = phone;
  }
  loadData(
    id: string,
    departmentId : string,
    buildingId :string,
    cityId : string,
    name: string,
    address: string,
    age: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.departmentId = departmentId;
    this.buildingId = buildingId;
    this.cityID = cityId
    this.name = name;
    this.address = address;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}
