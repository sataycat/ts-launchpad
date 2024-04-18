import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, sqlite } from "./db";

const migrateFn = () => {
  migrate(db, { migrationsFolder: "./src/db/migrations" });
  sqlite.close();
  console.log("Migration complete");
};

migrateFn();
