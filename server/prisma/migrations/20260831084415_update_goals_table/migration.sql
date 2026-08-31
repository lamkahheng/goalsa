/*
Warnings:

- You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.

 */
-- CreateEnum
CREATE TYPE "Status" AS ENUM('completed', 'not_completed');

-- Rename Table
ALTER TABLE "Goal"
RENAME TO "goals";

-- Add New Columns and Update Constraints
ALTER TABLE "goals"
ALTER COLUMN "id"
SET DATA TYPE TEXT,
ADD COLUMN "status" "Status" NOT NULL DEFAULT 'not_completed',
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL;

-- Rename Constraint
ALTER TABLE "goals"
RENAME CONSTRAINT "Goal_pkey" TO "goals_pkey";

-- Detaches the sequence default from id column
ALTER TABLE "goals"
ALTER COLUMN "id"
DROP DEFAULT;

-- Deletes the leftover sequence
DROP SEQUENCE IF EXISTS "Goal_id_seq";