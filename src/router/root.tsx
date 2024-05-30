import {createBrowserRouter} from "react-router-dom";

import ActivityPage from "../pages/ActivityPage";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ActivityPage />,
      },
    ],
  },
]);

export default router;
