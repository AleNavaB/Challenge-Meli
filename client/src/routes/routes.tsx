import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Results from "../pages/Results";
import DescriptionItem from "../pages/DescriptionItem";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/items',
        element: <Results />
      },
      {
        path: '/items/:id',
        element: <DescriptionItem search={undefined} />
      }
    ]
  }
])