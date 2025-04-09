# 🤖 Toy Robot Simulator
A command-line Node.js application that simulates a toy robot navigating a 5x5 tabletop grid. The robot responds to a set of predefined commands and reports its final position and orientation.

## ✨ Key Features
- Simulates robot movements accurately on a 5x5 grid
- Prevents the robot from falling off the table
- Ignores all commands until a valid PLACE is issued
- Accepts input commands from a file (commands.txt)
- Built using modern JavaScript (ES6+ with ES Modules)
- Fully tested with Jest and Babel for ESM compatibility



## 🚀 Getting Started
- 🔧 Install Dependencies
- npm install

## ▶️ Run the Simulator
 - Make sure your commands are listed in src/commands.txt, for example:

PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

## Then run:
- npm start

## Expected Output:
- 3,3,NORTH

## 🧪 Run Tests
npm test

Runs all unit tests using Jest and Babel, verifying correct robot behavior.

## 🧠 Design Principles & Highlights
- ✅ Modular architecture — separated logic into Robot, Table, and CommandProcessor classes
- Modern JavaScript — uses ES6+ and import/export syntax with "type": "module"
- Safe movement handling — robot never falls off or executes invalid commands
- Test-driven — test coverage using Jest ensures core logic is reliable
- Scalable design — easy to extend, refactor, or integrate with CLI/UI

## 💡 Future Enhancements
- Implement a visual grid view or web-based UI
- Support configurable grid size (e.g., 10x10)
- Add undo/redo functionality or movement history