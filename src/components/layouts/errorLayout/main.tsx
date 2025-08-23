import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";
import type React from "react";

interface ErrorLayoutProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
  info?: string;
}

export function ErrorLayout({ children, icon, title, description, info }: ErrorLayoutProps) {
  return (
    <div className="h-svh bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {icon}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        {info && (
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>{info}</span>
              </div>
            </CardContent>
          </Card>
        )}
        {children}
      </div>
    </div>
  );
}
