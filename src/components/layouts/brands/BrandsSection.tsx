import { useBrands } from "@/hooks/useBrands";
import BrandItem from "./BrandItem";
import { useState } from "react";
import { PaginationDemo } from "@/components/PaginationDemo";

type PaginationProps = "next" | "prev" | number;

export default function BrandsMain() {
  const { brands } = useBrands();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 6,
  });

  if (!brands) return <p>Tidak ada data</p>;

  const totalItems = brands.length;
  const start = pagination.pageIndex * pagination.pageSize;
  const end = start + pagination.pageSize;
  const paginatedData = brands.slice(start, end);
  const totalPages = Math.ceil(totalItems / pagination.pageSize);

  const paginationActions = (action: PaginationProps) => {
    if (action === "next") {
      setPagination((p) => ({ ...p, pageIndex: p.pageIndex + 1 }));
    } else if (action === "prev") {
      setPagination((p) => ({ ...p, pageIndex: p.pageIndex - 1 }));
    } else {
      setPagination((p) => ({ ...p, pageIndex: action - 1 }));
    }
  };

  return (
    <>
      <BrandItem data={paginatedData} />
      <PaginationDemo pageIndex={pagination.pageIndex + 1} total={totalPages} handleNext={() => paginationActions("next")} handlePrev={() => paginationActions("prev")} onPageChange={(page) => paginationActions(page)} />
    </>
  );
}
