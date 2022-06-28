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
    // handle scroll
    if (this.x >= bar.x - 80 && this.x <= bar.x - 35 && this.y >= bar.y - 200) {
      this.flag = "crollLeftUp";
    } else if (
      this.x >= bar.x + bar.width - 20 &&
      this.x <= bar.x + bar.width + 20 &&
      this.y >= bar.y - 200
    ) {
      console.log("Check - Right Up");
      this.flag = "crollRightUp";
    }
    switch (this.flag) {
      case "crollLeftUp":
        this.scrollLeftUp();
        break;
      case "crollRightUp":
        console.log("Check - 2");
        this.scrollRigtUp();
        break;
    }
    // handle UP left
    if (this.flag == "crollLeftUp" && this.x <= 0 && this.y > 0) {
      this.flag = "x<=0 && y>0 LeftUp";
    } else if (this.flag == "crollLeftUp" && this.x > 0 && this.y <= 0) {
      this.flag = "x>0 && y<=0 LeftUp";
    } else if (this.flag == "crollLeftUp" && this.x == 0 && this.y == 0) {
      this.flag = "x=0 && y=0 LeftUp";
    }
    switch (this.flag) {
      case "x<=0 && y>0 LeftUp":
        console.log("Check 5");
        this.scrollRigtUp();
        break;
      case "x>0 && y<=0 LeftUp":
        this.scrollDownLeft();
        console.log("Check 3");
        break;
      case "x=0 && y=0 LeftUp":
        console.log("Check 4");
        this.scrollReverse();
        break;
    }
    // handle UP right
    if (this.flag == "crollRightUp" && this.x > 0 && this.y <= 0) {
      this.flag = "x > 0  && y<=0 RightUp";
    } else if (
      this.flag == "crollRightUp" &&
      this.x > max + 160 &&
      this.y > 0
    ) {
      this.flag = "x>max && y > 0 RightUp";
    } else if (
      this.flag == "crollRightUp" &&
      this.x >= max + 160 &&
      this.y == 0
    ) {
      this.flag = "x=0 && y=0 RightUp";
    }
    switch (this.flag) {
      case "x > 0  && y<=0 RightUp":
        this.scrollReverse();
        console.log("Check 1");
        break;
      case "x>0 && y<=0 RightUp":
        console.log("Check 2");
        this.scrollLeftUp();
        break;
      case "x=0 && y=0 RightUp":
        console.log("Check Right Up");
        this.scrollReverseRight();
        break;
    }
    // handle Down Left
    if (this.flag == "x<=0 && y>0 LeftUp" && this.x > 0 && this.y <= 0) {
      this.flag = "x>0 && y<=0 RightDown";
    } else if (
      this.flag == "x>0 && y<=0 RightDown" &&
      this.x >= 0 &&
      this.y + 5 >= bar.y - 200
    ) {
      this.flag = "crollRightUp";
    } else if (
      this.flag == "crollRightUp" &&
      this.x > max + 130 &&
      this.y > 0
    ) {
      this.flag = "crollLeftUp";
    } else if (this.flag == "x>0 && y<=0 LeftUp" && this.y <= 0 && this.x > 0) {
      this.flag = "x>0 && y<=0 RightDown";
    } else if (this.flag == "x>0 && y<=0 LeftUp" && this.y <= 0 && this.x > 0) {
      this.flag = "crollLeftUp";
    } else if (this.flag == "crollLeftUp" && this.y > 0 && this.x < 0) {
      this.flag = "x>0 && y<=0 RightDown";
    } else if (this.flag == "crollLeftUp" && this.y > 0 && this.x > 0) {
      this.flag = "crollLeftUp";
    }
    // handle Down Right

    switch (this.flag) {
      case "x>0 && y<=0 RightDown":
        this.scrollReverse();
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
  }
  // check two
  scrollLeftUp() {
    this.y -= 3;
    img_ball.style.top = this.y + px;
    this.x -= 5;
    img_ball.style.left = this.x + px;
  }
  scrollRigtUp() {
    this.y -= 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.x + px;
  }
  scrollDownLeft() {
    this.y += 3;
    img_ball.style.top = this.y + px;
    this.x -= 5;
    img_ball.style.left = this.x + px;
  }
  scrollReverse() {
    this.y += 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.x + px;
  }
  scrollReverseRight() {
    this.y -= 3;
    img_ball.style.top = this.y + px;
    this.x += 5;
    img_ball.style.left = this.x + px;
  }
}
