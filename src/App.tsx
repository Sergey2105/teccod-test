import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home";


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
