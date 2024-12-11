import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1 className="text-3xl btn btn-primary">Hello</h1> world Guys!</div>,
  },
]);

export default router;