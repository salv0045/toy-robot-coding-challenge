const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

export default class Robot {
  constructor(table) {
    this.table = table;
    this.placed = false;
    this.x = null;
    this.y = null;
    this.direction = null;
  }

  place(x, y, direction) {
    if (this.table.isValidPosition(x, y) && DIRECTIONS.includes(direction)) {
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.placed = true;
    }
  }

  move() {
    if (!this.placed) return;
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case "NORTH": newY++; break;
      case "SOUTH": newY--; break;
      case "EAST": newX++; break;
      case "WEST": newX--; break;
    }

    if (this.table.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  left() {
    if (!this.placed) return;
    const index = (DIRECTIONS.indexOf(this.direction) + 3) % 4;
    this.direction = DIRECTIONS[index];
  }

  right() {
    if (!this.placed) return;
    const index = (DIRECTIONS.indexOf(this.direction) + 1) % 4;
    this.direction = DIRECTIONS[index];
  }

  report() {
    if (this.placed) {
      const output = `${this.x},${this.y},${this.direction}`;
      console.log(output);
      return output;
    }
  }
}
