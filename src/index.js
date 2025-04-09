import fs from "fs";
import Table from "./models/Table.js";
import Robot from "./models/Robot.js";
import CommandProcessor from "./services/CommandProcessor.js";

const table = new Table();
const robot = new Robot(table);
const processor = new CommandProcessor(robot);

const commands = fs.readFileSync("./src/commands.txt", "utf-8").split("\n");

commands.forEach(line => processor.process(line));
