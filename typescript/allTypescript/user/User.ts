export enum Role{
  user = 'user',
  admin = 'admin'
}
export class User{
  protected name : string ;
  protected email : string ;
  public role : Role ;
  constructor(name: string , email: string , role: Role){
    this.name = name
    this.email = email
    this.role = role
  }
  getInfo(){
    return 'Tên' + this.name + ' Email : ' + this.email + ' Role : ' + this.role
  }
  isAdmin(){
    if(this.role == 'admin'){
      return 'Tài khoản của bạn là Admin'
    }else{
      return 'Tài khoản của bạn là tài khoản cá nhân'
    }
  }
  setName(name: string){
    this.name = name
  }
  setEmail(email: string){
    this.email = email
  }
  setAdmin(role : Role){
    this.role = role
  }
}