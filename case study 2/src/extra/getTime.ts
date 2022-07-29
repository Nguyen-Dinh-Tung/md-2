export function getTime(): any{
  let date = new Date() ;
  let newDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` ;
  return newDate
}
