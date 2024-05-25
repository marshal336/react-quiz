import Header from "./Components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "./configs/constants/page.const";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={PAGES.HOME} element={<Home />} />
            </Routes>
        </>
    )
}