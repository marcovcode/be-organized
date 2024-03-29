import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import AppLayout from "./ui/AppLayout";
import FullPageSpinner from "./ui/FullPageSpinner";

const queryClient = new QueryClient();

const Join = lazy(() => import("./pages/Join"));

function App() {
    return (
        <>
            <Toaster />

            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<FullPageSpinner />}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route element={<Join />} path="join" />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
