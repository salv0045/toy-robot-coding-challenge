import Table from '../src/models/Table.js';
import Robot from '../src/models/Robot.js';
import CommandProcessor from '../src/services/CommandProcessor.js';

describe('Toy Robot Simulation', () => {
  let table, robot, processor;

  beforeEach(() => {
    table = new Table();
    robot = new Robot(table);
    processor = new CommandProcessor(robot);
  });

  test('PLACE 0,0,NORTH → MOVE → REPORT', () => {
    processor.process("PLACE 0,0,NORTH");
    processor.process("MOVE");
    expect(processor.process("REPORT")).toBe("0,1,NORTH");
  });

  test('PLACE 0,0,NORTH → LEFT → REPORT', () => {
    processor.process("PLACE 0,0,NORTH");
    processor.process("LEFT");
    expect(processor.process("REPORT")).toBe("0,0,WEST");
  });

  test('PLACE 1,2,EAST → MOVE MOVE LEFT MOVE REPORT', () => {
    const cmds = [
      "PLACE 1,2,EAST",
      "MOVE",
      "MOVE",
      "LEFT",
      "MOVE",
      "REPORT"
    ];
    cmds.forEach(cmd => processor.process(cmd));
    expect(processor.process("REPORT")).toBe("3,3,NORTH");
  });

  test('Invalid command before PLACE is ignored', () => {
    processor.process("MOVE");
    expect(processor.process("REPORT")).toBeUndefined();
  });

  test('Robot should not fall off table (edge case)', () => {
    processor.process("PLACE 0,0,SOUTH");
    processor.process("MOVE"); // Should be ignored
    expect(processor.process("REPORT")).toBe("0,0,SOUTH");
  });
});
