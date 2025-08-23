import { ErrorLayout } from "@/components/layouts/errorLayout/main";
import UnderConstructionActions from "@/components/layouts/errorLayout/UcAction";
import { WrenchIcon } from "lucide-react";

export default function UnderConstructionPage() {
  return (
    <ErrorLayout
      icon={
        <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
          <WrenchIcon className="w-12 h-12 text-amber-600" />
        </div>
      }
      title="Under Construction"
      description="We're working hard to bring you something amazing. This page will be ready soon!"
      info="Expected completion: Coming Soon"
    >
      <UnderConstructionActions />
      <p className="text-xs text-muted-foreground">Thank you for your patience while we build something great!</p>
    </ErrorLayout>
  );
}
