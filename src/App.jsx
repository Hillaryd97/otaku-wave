import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Landing from "./pages/Landing";
import ErrorPage from "./components/ErrorPage";
// import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      
      <Route path="/*" element={<ErrorPage />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
