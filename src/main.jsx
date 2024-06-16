import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Simflouz from "./Pages/Simflouz/Simflouz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import cheats_simflouz from "./Assets/cheats/cheats_simflouz.json";
import cheats_personnage from "./Assets/cheats/cheats_personnage.json";
import cheats_construction from "./Assets/cheats/cheats_construction.json";
import Like from "./Pages/Like/Like";

const router = createBrowserRouter([
    { path: "/", element: <Simflouz data={cheats_simflouz} /> },
    { path: "/Simflouz", element: <Simflouz data={cheats_simflouz} /> },
    {
        path: "/Personnage",
        element: <Simflouz data={cheats_personnage} />,
    },
    {
        path: "/Construction",
        element: <Simflouz data={cheats_construction} />,
    },
    { path: "/Like", element: <Like /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
