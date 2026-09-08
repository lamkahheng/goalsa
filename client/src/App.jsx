import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { CreateGoalPage } from "./pages/CreateGoalPage";
import { createGoal } from "./api/goalsApi";
import { GoalPage } from "./pages/GoalPage";
import { GoalsPage } from "./pages/GoalsPage";
import { EditGoalPage } from "./pages/EditGoalPage";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/goals/new"
          element={<CreateGoalPage createGoal={createGoal} />}
        />
        <Route path="/goals/:id" element={<GoalPage />}></Route>
        <Route path="/goals" element={<GoalsPage />}></Route>
        <Route path="/goals/edit/:id" element={<EditGoalPage />}></Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
