import { Home } from "./Containers/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./Containers/Landing/Landing";
import { PickCategory } from "./Containers/PickCategory/PickCategory";
import useSounds from "./Hooks/useSounds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home/:category",
    element: <Home />,
  },
  {
    path: "/pick-category",
    element: <PickCategory />,
  },
]);

function App() {
  const { BackgroundSound } = useSounds();
  return (
    <BackgroundSound>
      <RouterProvider router={router} />;
    </BackgroundSound>
  );
}

export default App;
