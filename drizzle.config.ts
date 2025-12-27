//drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/auth-schema.ts", // where our tables are defined
  dialect: "sqlite",
  dbCredentials: {
    url: "sqlite.db", // This is the name of the file it will create
  },
});
