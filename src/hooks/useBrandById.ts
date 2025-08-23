import { getBrandById } from "@/services/getBrandById";
import { useQuery } from "@tanstack/react-query";

export function useBrandById(id: string) {
  const {
    data: brand,
    error,
    isPending,
  } = useQuery({
    queryKey: ["brandById", id],
    queryFn: ({ queryKey }) => getBrandById(queryKey[1] as string),
    enabled: !!id,
  });

  return {
    brand,
    error,
    isPending,
  };
}
