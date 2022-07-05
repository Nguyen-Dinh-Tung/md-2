class Recipe {
  constructor(name, amount, option) {
    this.name = name;
    this.amount = amount;
    this.option = option;
  }
  getInfo() {
    return (
      "Tên món : " +
      this.name +
      " Số lượng : " +
      this.amount +
      " Thành phần : " +
      this.option
    );
  }
}
