/*
Warnings:

- You are about to drop the column `goalId` on the `tasks` table. All the data in the column will be lost.
- Added the required column `goal_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

 */
-- RenameColumn
ALTER TABLE "tasks"
RENAME COLUMN "goalId" TO "goal_id";

-- RenameForeignKey
ALTER TABLE "tasks"
RENAME CONSTRAINT "tasks_goalId_fkey" TO "tasks_goal_id_fkey"