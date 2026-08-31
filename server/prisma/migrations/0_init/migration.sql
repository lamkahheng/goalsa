-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE
    "Goal" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "description" TEXT,
        CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
    );