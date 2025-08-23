import { getProductById } from "@/services/getProductById";
import { useQuery } from "@tanstack/react-query";

export function useProductById(id: string) {
  const {
    data: product,
    error,
    isPending,
  } = useQuery({
    queryKey: ["productById", id],
    queryFn: ({ queryKey }) => getProductById(queryKey[1] as string),
    enabled: !!id,
  });

  return {
    product,
    error,
    isPending,
  };
}
