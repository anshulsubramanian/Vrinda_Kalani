import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TgrProject from "./pages/TgrProject";
import WhiteStudiosProject from "./pages/WhiteStudiosProject";
import WhiteMinimalProject from "./pages/WhiteMinimalProject";
import NishaniProject from "./pages/NishaniProject";
import MohhProject from "./pages/MohhProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
  <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tgr-project" element={<TgrProject />} />
          <Route path="/white-studios-project" element={<WhiteStudiosProject />} />
          <Route path="/white-minimal-project" element={<WhiteMinimalProject />} />
          <Route path="/nishani-project" element={<NishaniProject />} />
          <Route path="/mohh-project" element={<MohhProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
