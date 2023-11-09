import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface RepositoryCardLoadingProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const RepositoryCardLoading = React.forwardRef<
  HTMLDivElement,
  RepositoryCardLoadingProps
>(({ className, ...rest }, ref) => {
  return (
    <Card ref={ref} className={cn("mb-2", className)} {...rest}>
      <CardHeader className="px-4 pb-0 pt-2">
        <CardTitle className="text-md flex items-center border-b pb-2">
          <Skeleton className="h-6 w-1/6" />
          <div className="ml-auto flex items-center gap-x-2">
            <Skeleton className="h-6 w-24" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <Skeleton className="h-6 w-1/2" />
      </CardContent>
    </Card>
  );
});
