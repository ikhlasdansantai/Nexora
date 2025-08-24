import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationProps {
  pageIndex: number;
  total: number;
  handleNext: VoidFunction;
  handlePrev: VoidFunction;
  onPageChange: (page: number) => void;
}

export function PaginationDemo({ pageIndex, total, handlePrev, handleNext, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between gap-3 mt-10">
      <p className="flex-1 text-sm whitespace-nowrap" aria-live="polite">
        Page <span className="text-foreground">{pageIndex}</span> of <span className="text-foreground">{total}</span>
      </p>

      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={handlePrev} aria-disabled={pageIndex === 1} className={`${pageIndex === 1 && "text-muted-foreground pointer-events-none"}`}>
            <PaginationPrevious href="#" className={`${pageIndex === 1 && "text-muted-foreground pointer-events-none"}`} />
          </PaginationItem>
          {Array.from({ length: total }, (_, i) => (
            <PaginationItem onClick={() => onPageChange(i + 1)}>
              <PaginationLink href="#" isActive={i === pageIndex - 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {total >= 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem onClick={handleNext} aria-disabled={pageIndex >= total} className={`${pageIndex >= total && "text-muted-foreground pointer-events-none"}`}>
            <PaginationNext href="#" className={`${pageIndex >= total && "text-muted-foreground pointer-events-none"}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
