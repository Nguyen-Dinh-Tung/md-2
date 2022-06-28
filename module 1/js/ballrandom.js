class Ball {
  // atb
  width;
  height;
  x;
  y;
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.flag = 0;
    this.maxY = 170;
  }

  moveBall() {
    // up down
    if (this.y <= 0) {
      this.flag = "Down";
    } else if (
      this.y >= bar.y - 200 &&
      this.y < bar.y - 150 &&
      this.x >= bar.x - 35 &&
      this.x <= bar.x + bar.width - 30
    ) {
      this.flag = "TOP";
    } else if (this.flag == "Down" && this.y <= 0 && this.x > 0) {
      this.flag == "random";
    }
    //case
    switch (this.flag) {
      case "Down":
        this.moveDown();
        break;
      case "TOP":
        this.moveTop();
        break;
      case "random":
        this.random();
        console.log("check");
        break;
    }
  }

  moveDown() {
    this.y += 5;
    img_ball.style.top = this.y + px;
  }
  moveTop() {
    this.y -= 5;
    img_ball.style.top = this.y + px;
  }
  moveRandom() {
    this.x = Math.floor(Math.random() * 1900);
  }
  // check two
}
