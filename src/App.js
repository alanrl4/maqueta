import { useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Admin, Login, Agente, Canciones, Listas, Tiendas } from "./routes";

const routes = [
    { path: "/", element: Login },
    { path: "agente", element: Agente },
];

function App() {
    const theme = useTheme();

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="agente" element={<Agente />} />
                <Route path="admin" element={<Admin />}>
                    <Route path="" element={<Canciones />} />
                    <Route path="listas" element={<Listas />} />
                    <Route path="tiendas" element={<Tiendas />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
