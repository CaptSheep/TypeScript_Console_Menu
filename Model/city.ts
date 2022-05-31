export class City {
  id: string;
  name: string;
  constructor(id?: string, name?: string) {
    this.id = id;
    this.name = name;
  }
  getId() {
    return this.id;
  }
  setId(id: string) {
    this.id = id;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}
