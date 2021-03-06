
export class Student {

   _name: string;
   _age: number;
   _date: string;
   _email: string;
   _group: string;

   constructor(name : string , age : number , date : string , email : string , group : string){
    this._name = name ;
    this._age = age ;
    this._date = date ;
    this._email = email ;
    this._group = group ;
  }


  protected get name(): string {
    return this._name;
  }
  protected set name(value: string) {
    this._name = value;
  }

  public getAge(): number {
    return this._age;
  }
  protected set age(value: number) {
    this._age = value;
  }

  protected get date(): string {
    return this._date;
  }
  protected set date(value: string) {
    this._date = value;
  }

  protected get email(): string {
    return this._email;
  }
  protected set email(value: string) {
    this._email = value;
  }

  protected get group(): string {
    return this._group;
  }
  protected set group(value: string) {
    this._group = value;
  }



}