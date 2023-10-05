import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Analytics from "../../pages/analytics";
import Calendar from "../../pages/calendar";
import Dashboard from "../../pages/dashboard";
import MyTasks from "../../pages/myTasks";
import Projects from "../../pages/projects";
import Teams from "../../pages/teams";
import Layout from "../layout";
import Login from "../../pages/login";
import NotFound from "../../components/notFound";
import FAQ from "../../pages/faq";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = true;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/myTasks",
          element: <MyTasks />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/help",
          element: <FAQ />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
