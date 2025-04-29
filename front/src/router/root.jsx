import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <AboutPage />
      </Suspense>
    ),
  },
]);

export default root;
