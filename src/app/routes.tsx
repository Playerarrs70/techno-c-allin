import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { PrototypePage } from "./pages/PrototypePage";
import { PartnerDashboardPage } from "./pages/PartnerDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/prototype",
    Component: PrototypePage,
  },
  {
    path: "/partner-dashboard",
    Component: PartnerDashboardPage,
  },
]);
