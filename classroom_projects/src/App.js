import "./App.css";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Example from "./Components/Example";
import ClassComponents from "./Components/ClassRoutes";
import { Suspense } from "react";
import Movies from "./Components/Movies";
import Context from "./Context/Context";
import SearchPractice from "./Components/SearchPractice";
import Practice from "./Components/Practice";
import Pract from "./Components/Pract";
import NoteList from "./Components/notes/NoteList";
import DropDownSearcj from "./Components/DropDownSearcj";

// const Customer = React.lazy(() => import("./Components/ClassComponents"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/searchpractice",
    element: <SearchPractice />,
  },
  {
    path: "/dropdownsearch",
    element: <DropDownSearcj />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/pract",
    element: <Pract />,
  },
  {
    path: "/notelist",
    element: <NoteList />,
  },
  {
    path: "/example",
    element: <Example />,
    children: [
      {
        path: "classcomponents/*",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <ClassComponents />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </>
  );
}

export default App;
