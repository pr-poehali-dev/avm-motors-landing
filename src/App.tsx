import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Catalog = lazy(() => import("./pages/Catalog"));
const VehicleDetails = lazy(() => import("./pages/VehicleDetails"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<VehicleDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;