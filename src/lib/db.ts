// lib/db.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

// This creates a local 'sqlite.db' file if it doesn't exist
const sqlite = new Database("sqlite.db");

export const db = drizzle(sqlite);
