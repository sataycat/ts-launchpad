import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquries = sqliteTable("enquries", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  message: text("email").notNull(),
  name: text("name"),
});
