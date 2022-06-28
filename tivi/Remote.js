class Remote {
  code;
  constructor(code) {
    this.code = code;
  }
  upVol(tivi) {
    tivi.upVol();
  }
  downVol(tivi) {
    tivi.downVol();
  }
  nextChanel(tivi) {
    tivi.nextChanel();
  }
  open(tivi) {
    tivi.openTivi();
  }
  close(tivi) {
    tivi.closeTivi();
  }
}
