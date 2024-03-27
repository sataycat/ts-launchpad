import dotenvFlow from "dotenv-flow";
import { cleanEnv, port, str } from "envalid";

dotenvFlow.config();

export const env = cleanEnv(process.env, {
  PORT: port(),
  NODE_ENV: str({
    choices: ["development", "test", "production"],
    default: "development",
  }),
});
