import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </RouterProvider>
  );
}

export default App;
