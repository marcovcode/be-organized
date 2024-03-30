import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import AppLayout from "./ui/AppLayout";
import FullPageSpinner from "./ui/FullPageSpinner";
import ProtectedRoute from "./ui/ProtectedRoute";
import Todos from "./pages/Todos";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const Join = lazy(() => import("./pages/Join"));

function App() {
    return (
        <>
            <Toaster />

            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<FullPageSpinner />}>
                    <ReactQueryDevtools />

                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route
                                    index
                                    element={
                                        <ProtectedRoute>
                                            <Todos />
                                        </ProtectedRoute>
                                    }
                                />
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
