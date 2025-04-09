export default class Table {
    constructor(size = 5) {
      this.size = size;
    }
  
    isValidPosition(x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }
  }
  