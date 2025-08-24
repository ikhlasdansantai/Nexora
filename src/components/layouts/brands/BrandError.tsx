import { Button } from "@/components/ui/button";
import { useBrands } from "@/hooks/useBrands";
import { RefreshCwIcon } from "lucide-react";

export default function BrandError() {
  const { refetch } = useBrands();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-2">Oops! Something went wrong</h2>

          <p className="text-muted-foreground mb-6 max-w-md">We couldn't load the brands right now. This might be a temporary issue.</p>

          <Button variant="default" className="flex items-center gap-2 cursor-pointer" onClick={() => refetch()}>
            <RefreshCwIcon className="size-4" />
            Try Again
          </Button>

          <div className="mt-8 p-4 bg-muted/50 rounded-lg max-w-md">
            <p className="text-sm text-muted-foreground">
              <strong>Still having issues?</strong>
              <br />
              Try refreshing the page or check your internet connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
