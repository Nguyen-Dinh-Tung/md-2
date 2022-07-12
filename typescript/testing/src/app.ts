export function filterByTerm(arr: any, pattern: string) {
  return arr.filter( (item: any) => {
      return item.url.match(pattern);
  });
}