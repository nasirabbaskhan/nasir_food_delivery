import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const foodTable = pgTable("food", {
  id: serial("id").primaryKey(),
  userid: varchar("userid", { length: 255 }).notNull(),
  foodid: varchar("foodid", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export type food = InferModel<typeof foodTable>;
export type Newfood = InferModel<typeof foodTable, "insert">; // insert type

export const db = drizzle(sql);
