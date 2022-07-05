class StopWatch {
  constructor() {
    this.endTime;
    this.startTime;
  }
  getterStart() {
    return this.startTime;
  }
  getterEnd() {
    return this.endTime;
  }
  start() {
    this.startTime = new Date();
  }
  end() {
    this.endTime = new Date();
  }
  getElapsedTime() {
    return this.endTime - this.startTime;
  }
}
