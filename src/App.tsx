import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home/index.tsx";
import MainLayout from "./components/layouts/MainLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
