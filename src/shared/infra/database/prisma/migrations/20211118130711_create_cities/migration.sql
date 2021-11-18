CREATE EXTENSION IF NOT EXISTS citext SCHEMA public;

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "state" CHAR(2) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);
