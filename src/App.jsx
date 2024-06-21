import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Home from "./component/home/Home";
import NotFound from "./component/NotFound/NotFound";
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
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
