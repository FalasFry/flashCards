import { createHashRouter } from "react-router-dom";
import App from './App';
import StudyPage from "./Pages/StudyPage";
import LoadDeckPage from "./Pages/LoadDeckPage";
import CreateDeckPage from "./Pages/CreateDeckPage";
import ManageDeckPage from "./Pages/ManageDeckPage";

const router = createHashRouter([
{
  path: "/",
  element: <App />,
  children: [
  {
      path: "*",
      element: <p>Page Not Found</p>
  },
  {
    index: true,
    element: <StudyPage/>
  },
  {
    path: "load-deck",
    element: <LoadDeckPage/>
  },
  {
    path: "create-deck",
    element: <CreateDeckPage/>
  },
  {
    path: "manage-deck",
    element: <ManageDeckPage/>
  }

  ] 
},]);
export default router;