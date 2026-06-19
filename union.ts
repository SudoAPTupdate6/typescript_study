// Basic Union - variable can be string OR number
let id: string | number;
id = "ABC123"; // ✓ Valid
id = 123; // ✓ Valid
// id = true; // ✗ Error

// Union with multiple types
let value: string | number | boolean;
value = "hello";
value = 42;
value = true;

// Union with literal types
type Status = "success" | "error" | "pending";
const status: Status = "success"; // ✓ Valid
// const status: Status = "failed"; // ✗ Error

// Union with objects
type Admin = {
  role: "admin";
  permissions: string[];
};

type User = {
  role: "user";
  name: string;
};

type Account = Admin | User;

const account1: Account = {
  role: "admin",
  permissions: ["read", "write", "delete"],
};

const account2: Account = {
  role: "user",
  name: "John",
};

// Type Guards - checking which type we have
function printAccount(account: Account) {
  if (account.role === "admin") {
    console.log("Admin permissions:", account.permissions);
  } else {
    console.log("User name:", account.name);
  }
}

// Union with arrays
let data: string[] | number[];
data = ["a", "b", "c"]; // ✓ Valid
data = [1, 2, 3]; // ✓ Valid

// Union with function types
type Callback = ((data: string) => void) | ((data: number) => number);

// Discriminated Union (common pattern)
type Response = 
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function handleResponse(response: Response) {
  switch (response.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data:", response.data);
      break;
    case "error":
      console.log("Error:", response.message);
      break;
  }
}

// Type narrowing with typeof
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's a string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's a number
  }
}