import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Join from "./pages/Join";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="font-quicksand">
            <Toaster />

            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Join />} path="join" />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;
