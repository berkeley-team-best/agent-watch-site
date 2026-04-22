import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import CaseStudies from "./pages/CaseStudies";
import Contribute from "./pages/Contribute";
import Research from "./pages/Research";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "framework", Component: Framework },
      { path: "case-studies", Component: CaseStudies },
      { path: "contribute", Component: Contribute },
      { path: "research", Component: Research },
    ],
  },
]);
