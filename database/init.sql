BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS session CASCADE;
DROP TABLE IF EXISTS potPosts CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT UNIQUE,
  "password" TEXT,
  "username" TEXT
);

CREATE TABLE "session" (
  "sid" TEXT PRIMARY KEY,
  "data" JSON
);

CREATE TABLE "potPosts" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar(20),
  "post" TEXT,
  "imgSrc" TEXT,
  "user_id" int
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "potPosts" ("user_id");





COMMIT;