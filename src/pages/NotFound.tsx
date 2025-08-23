import { ErrorLayout } from "@/components/layouts/errorLayout/main";
import NotFoundAction from "@/components/layouts/errorLayout/NfAction";
import { FrownIcon } from "lucide-react";

export default function NotFound() {
  return (
    <ErrorLayout
      icon={
        <div className="w-24 h-24 bg-destructive-100 dark:bg-destructive-900/20 rounded-full flex items-center justify-center mx-auto">
          <FrownIcon className="w-12 h-12 text-destructive dark:text-destructive/80" />
        </div>
      }
      title="404 - Not Found"
      description="Oops! The page you are looking for does not exist. It might have been moved or deleted."
    >
      <NotFoundAction />
      <p className="text-xs text-muted-foreground">Double-check the URL and try again.</p>
    </ErrorLayout>
  );
}
