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
    }
    //case
    switch (this.flag) {
      case "Down":
        this.moveDown();
        break;
      case "TOP":
        this.moveTop();
        break;
    }
    this.checkCross();
  }
  checkCross() {
    // up cross left
    if (this.x <= bar.x - 35 && this.x > bar.x - 80 && this.y >= bar.y - 200) {
      this.flag = "LTOP";
    } else if (this.x <= 0 && this.y > 0 && this.flag == "LTOP") {
      this.flag = "LTOPX";
    } else if (this.x > 0 && this.y <= 1 && this.flag == "LTOPX") {
      this.flag = "DownRight";
    } else if (
      this.x >= bar.x &&
      this.x < bar.x + bar.width + 60 &&
      this.y <= bar.y &&
      this.y + 205 >= bar.y &&
      this.flag == "DownRight"
    ) {
      this.flag = "RTOP";
    } else if (this.y > 0 && this.flag == "RTOP" && this.x > max + 100) {
      this.flag = "TOPLEFT";
    } else if (this.x > 0 && this.y <= 1 && this.flag == "TOPLEFT") {
      this.flag = "DownLeft";
    } else if (
      this.x > 0 &&
      this.y >= bar.x - 80 &&
      this.flag == "DownLeft" &&
      this.x >= bar.x &&
      this.x <= bar.x + bar.width
    ) {
      this.flag = "LTOP";
    } else if (
      this.flag == "DownRight" &&
      this.x >= bar.x - 25 &&
      this.x <= bar.x - 50 &&
      this.y >= bar.y
    ) {
      this.flag = "TOPLEFT";
      console.log("Check");
    } else if (this.flag == "TOPLEFT" && this.x > 0 && this.y <= 0) {
      this.flag = "DownLeft";
    }
    // Top right
    // if (
    //   this.x >= bar.x + bar.width &&
    //   this.x < bar.x + bar.width + 60 &&
    //   this.y >= bar.y - 200
    // ) {
    //   this.flag = "RTop";
    // }
    // case

    switch (this.flag) {
      case "LTOP":
        this.moveLT();
        break;
      case "LTOPX":
        this.moveRT();
        break;
      case "DownRight":
        this.downRight();
        console.log("Check");
        break;
      case "RTOP":
        console.log(this.y + "BALL Y");
        console.log(max);
        this.moveRT();
        break;
      case "TOPLEFT":
        this.moveLT();
        break;
      case "DownLeft":
        console.log(this.y + " Check max y");
        this.moveDownLeft();
        break;
    }
  }
  // check one
  moveDown() {
    this.y += 5;
    img_ball.style.top = this.y + px;
  }
  moveTop() {
    this.y -= 5;
    img_ball.style.top = this.y + px;
    console.log(bar.x);
    console.log(this.x);
  }
  // check two
  moveLT() {
    this.y -= 3;
    img_ball.style.top = this.y + px;
    this.x -= 5;
    img_ball.style.left = this.x + px;
  }
  moveRT() {
    this.y -= 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.x + px;
  }
  // reverse
  moveReverse() {
    this.y += 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.y + px;
  }
  // next check
  moveDownLeft() {
    this.y += 3;
    img_ball.style.top = this.y + px;
    this.x -= 5;
    img_ball.style.left = this.x + px;
  }
  downRight() {
    this.y += 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.x + px;
  }
}
