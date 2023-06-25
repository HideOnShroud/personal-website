import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/project/:title", element: <ProjectPage /> },
        ]

    }
])

export default router