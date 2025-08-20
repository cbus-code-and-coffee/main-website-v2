import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("EMAIL:", process.env.EMAIL);
console.log("PASSWORD:", process.env.PASSWORD);
