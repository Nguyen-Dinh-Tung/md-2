class Tivi {
  chanel;
  vol;
  status;
  constructor(chanel, vol, status) {
    this.chanel = chanel;
    this.vol = vol;
    this.status = status;
  }
  nextChanel() {
    this.chanel = "VTV1";
  }
  getChanel() {
    return this.chanel;
  }
  upVol() {
    this.vol++;
  }
  downVol() {
    this.vol--;
  }
  getVol() {
    return this.vol;
  }
  openTivi() {
    this.status = true;
  }
  closeTivi() {
    this.status = false;
  }
}
