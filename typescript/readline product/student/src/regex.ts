let regexpEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

export function isEmail(email: string): boolean{
  return regexpEmail.test(email)
}