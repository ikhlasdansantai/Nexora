import ProductEmpty from "@/components/layouts/brand/BrandProductEmpty";
import ProductItem from "@/components/layouts/brand/BrandProductItem";
import { PaginationDemo } from "@/components/PaginationDemo";
import type { Brand } from "@/const/interfaces";
import { useState } from "react";

type PaginationProps = "next" | "prev" | number;
export default function ProductSection({ brand }: { brand: Brand }) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 6,
  });

  const totalItems = brand.products.length;
  const totalPages = Math.ceil(totalItems / pagination.pageSize);

  const start = pagination.pageIndex * pagination.pageSize;
  const end = start + pagination.pageSize;
  const paginatedData = brand.products.slice(start, end);

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
      {brand.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductItem products={paginatedData} />
        </div>
      ) : (
        <ProductEmpty brandName={brand.name} />
      )}

      {totalItems > 6 && <PaginationDemo pageIndex={pagination.pageIndex + 1} total={totalPages} handleNext={() => paginationActions("next")} handlePrev={() => paginationActions("prev")} onPageChange={(page) => paginationActions(page)} />}
    </>
  );
}
