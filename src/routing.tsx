import { createBrowserRouter, redirect } from "react-router-dom";
import { ErrorPage, Layout, ProfilePage } from "./pages";
import {
  ClientsPage,
  DealingsPage,
  EmployeesPage,
  RequestsPage,
  VehiclePage,
} from "./pages/ProfilePage/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            index: true,
            loader: () => redirect("/profile/vehicle"),
          },
          {
            path: "/profile/vehicle",
            element: <VehiclePage />,
          },
          {
            path: "/profile/requests",
            element: <RequestsPage />,
          },
          {
            path: "/profile/dealings",
            element: <DealingsPage />,
          },
          {
            path: "/profile/employees",
            element: <EmployeesPage />,
          },
          {
            path: "/profile/clients",
            element: <ClientsPage />,
          },
        ],
      },
    ],
  },
]);
