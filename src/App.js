import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import MainContainer from "./components/MainContainer";
import Navigation from "./components/Navigation";
import SearchVideoListing from "./components/SearchVideoListing";
import VideoPage from "./components/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <MainContainer />
          </>
        ),
      },
      {
        path: "watch",
        element: <VideoPage />,
      },
      {
        path: "results",
        element: <SearchVideoListing />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  );
}

export default App;
