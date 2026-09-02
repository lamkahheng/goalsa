import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { CreateGoalPage } from "./pages/CreateGoalPage";
import { createGoal } from "./api/goalsApi";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/goals/new"
          element={<CreateGoalPage createGoal={createGoal} />}
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
