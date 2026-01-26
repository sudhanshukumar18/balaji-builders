import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Signal to prerenderer that page is ready for SSG
  useEffect(() => {
    if (!showSplash) {
      document.dispatchEvent(new Event('render-complete'));
    }
  }, [showSplash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;