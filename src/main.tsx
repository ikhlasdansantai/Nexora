import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import BrandDetail from "@/pages/BrandDetail.tsx";
import ProductDetail from "@/pages/ProductDetail.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import SupportPage from "@/pages/Support.tsx";
import BrandsPage from "@/pages/Brands.tsx";
import NotFound from "@/pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/brand/:id",
    element: <BrandDetail />,
  },
  {
    path: "/brand/:brandId/product/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/brands",
    element: <BrandsPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
