import { createBrowserRouter } from "react-router-dom";
import DeleteAccountModal from "../components/modals/DeleteAccountModal.jsx";
import Home from "../pages/Home";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "delete-account",
                element: <DeleteAccountModal />
            }
        ]
    }
]);

export default router;