import { Github } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface UserCardLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isFetching?: boolean;
  description?: string;
}

export function UserCardLoading({
  isFetching = false,
  description = "Search Github User",
  className,
  ...rest
}: UserCardLoadingProps) {
  return (
    <Card className={className} {...rest}>
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <Github
            className={cn(
              "h-16 w-16 text-primary",
              isFetching && "animate-pulse",
            )}
          />
        </CardTitle>
        <CardDescription className="flex items-center justify-center">
          {isFetching ? "Searching.." : description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
