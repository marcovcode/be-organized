import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";

function App() {
    return (
        <div className="font-quicksand">
            <BrowserRouter>
                <Routes>
                    <Route element={<Join />} path="join" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
