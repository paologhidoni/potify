const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  throw new Error("Please set the DATABASE_URL environment variable");
}

// connects to out local database
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;
