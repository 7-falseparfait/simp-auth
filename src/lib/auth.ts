import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./auth-schema"; // The file we just created

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: schema, // passing the schema here
  }),
  emailAndPassword: {
    enabled: true,
  },
  // We will add plugins here later
});
