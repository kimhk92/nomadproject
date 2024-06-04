import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
