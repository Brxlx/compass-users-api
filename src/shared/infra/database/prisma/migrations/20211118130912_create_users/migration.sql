CREATE EXTENSION IF NOT EXISTS citext SCHEMA public;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fullname" CITEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "age" INTEGER NOT NULL,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_fullname_key" ON "users"("fullname");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
