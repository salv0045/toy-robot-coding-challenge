export default class CommandProcessor {
    constructor(robot) {
      this.robot = robot;
    }
  
    process(commandLine) {
      const [command, args] = commandLine.trim().split(" ");
  
      switch (command) {
        case "PLACE":
          if (!args) return;
          const [x, y, dir] = args.split(",");
          this.robot.place(parseInt(x), parseInt(y), dir);
          break;
        case "MOVE":
          this.robot.move();
          break;
        case "LEFT":
          this.robot.left();
          break;
        case "RIGHT":
          this.robot.right();
          break;
        case "REPORT":
          return this.robot.report();
      }
    }
  }
  