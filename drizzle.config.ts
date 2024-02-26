import { Config } from "drizzle-kit"

export default {
  schema: "./src/lib/db/schema.ts",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    //   host: process.env.DATABASE_HOST,
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    uri: process.env["DATABASE_URL"] || "",
  },
}
