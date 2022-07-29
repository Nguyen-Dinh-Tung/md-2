export class User {
	private _name : string ;
    private _phone : string ;
	private _age : number ;
	private _email : string ;
	private _idCard : string ;
    private _surplus : number ;
    private _user : string | undefined ;
    private _pass : string | undefined ;
    constructor
    (_name : string,
        _phone : string,
        _age : number,
        _email : string,
        idCard : string,
    ){
        this._name = _name ;
        this._phone = _phone ;
        this._age = _age ;
        this._email = _email ;
        this._idCard = idCard ;
        this._surplus = 0 ;
    }

    getInfo(){
        let customer = {
            name : this._name,
            phone : this._phone,
            age : this._age,
            email : this._email,
            idCard : this._idCard,
            surplus : this._surplus,
        }
        let infoRender = [];
        infoRender.push(customer)
    }

    getName(): string{
        return this._name ;
    }

    setName(name : string): void{
        this._name = name ;
    }

    getPhone(): string{
        return this._phone ;
    }

    setPhone(phone : string): void{
    this._phone = phone ;
    }
    getAge(): number{
        return this._age ;
    }

    setAge(age : number): void{
    this._age = age ;
    }

    getEmail(): string{
        return this._email ;
    }

    setEmail(email : string): void{
    this._email = email ;
    }

    getIdCard(): string{
        return this._idCard ;
    }

    setIdCard(idCard : string): void{
    this._idCard = idCard ;
    }

    getSurplus(): number{
        return this._surplus ;
    }

    setUpSurplus(surplus: number) :void{
        this._surplus = this._surplus + surplus;
    }

    setDownSurplus(surplus: number) :void{
        this._surplus = this._surplus - surplus;
    }

    setUser(newUser : string): void{
        this._user = newUser ;
    }

    getUser():string | undefined{
    return this._user ;
    }

    setPass(newPass : string): void{
    this._pass = newPass ;
    }

    getPass():string | undefined{
    return this._pass ;
    }
    getInterest(percent: number , day: number): number{
        let totalInterest = this._surplus * percent * day ;
        return totalInterest ;
    }
}