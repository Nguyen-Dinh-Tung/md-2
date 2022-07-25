import { TransfersHistory } from './TransfersHistory';
import { getTime, interest } from "./Constant";

export class User {
	private _name : string ;
    private _phone : string ;
	private _age : number ;
	private _email : string ;
	private _idCard : string ;
    private _money : number ;
    private _user : string | undefined ;
    private _pass : string | undefined ;
  constructor(_name : string,
              _age : number,
              _email : string,
              idCard : string,
              _phone : string ,
  ){
      this._name = _name ;
      this._age = _age ;
      this._email = _email ;
      this._idCard = idCard ;
      this._phone = _phone ;
      this._money = 0 ;
  }


    public get user():any {
        return this._user;
    }

    public set user(_user: string) {
        this._user = _user;
    }

    public get pass():any {
        return this._pass;
    }

    public set pass(_pass: string) {
        this._pass = _pass;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(_phone: string) {
        this._phone = _phone;
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get idCard(): string {
        return this._idCard;
    }

    public set idCard(idCard: string) {
        this._idCard = idCard;
    }

    public set money(moneyInput : number){
      this._money = this._money + moneyInput ;
    }
    public get money(): number{
        return this._money ;
    }
    public setSurplus(moneyInput : number){
        this._money = this._money + moneyInput ;
      }
    public getMoney(money : number): void{
      this._money = this._money - money ;
    }
    public getMoneyToTransfer(money:number): number{
      this._money = this._money - money ;
      return money
    }
    public calcInterest(tSDay: number): number{
        let total = this._money * interest * tSDay
        return total;
    }


}