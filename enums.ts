// String Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const dir: Direction = Direction.Up;
console.log(dir); // "UP"

// Numeric Enum (auto-incrementing)
enum Status {
  Active = 0,
  Inactive = 1,
  Pending = 2,
}

const status: Status = Status.Active;
console.log(status); // 0

// Heterogeneous Enum
enum Mixed {
  No = 0,
  Yes = "YES",
}

// Const Enum (optimized)
const enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const myColor: Color = Color.Red;

// Using Enums in Functions
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

move(Direction.Right);

// Reverse Mapping (numeric enums only)
enum Level {
  Low = 1,
  High = 2,
}

console.log(Level[1]); // "Low"