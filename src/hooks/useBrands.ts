import { getBrands } from "@/services/getBrands";
import { useQuery } from "@tanstack/react-query";

export function useBrands() {
  const {
    data: brands,
    isPending,
    error,
    refetch,
    status,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    retry: 0,
    retryDelay: 1000,
  });

  return {
    brands,
    isPending,
    error,
    refetch,
    status,
  };
}
