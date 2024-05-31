import {createBrowserRouter} from "react-router-dom";

import ActivityPage from "../pages/ActivityPage";
import RootLayout from "../layout/RootLayout";
import {ChatPage} from "../pages/ChatPage";
import {DepositPage} from "../pages/DepositPage";
import {NewsPage} from "../pages/NewsPage";
import {MessagesPage} from "../pages/MessagesPage";
import {AnalyticsPage} from "../pages/AnalyticsPage";
import {HelpPage} from "../pages/HelpPage";
import {SettingsPage} from "../pages/SettingsPage";
import {AnnouncementsPage} from "../pages/AnnouncementsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ActivityPage />,
      },
      {
        path: "deposit",
        element: <DepositPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "messages",
        element: <MessagesPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "announcements",
        element: <AnnouncementsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
]);

export default router;
