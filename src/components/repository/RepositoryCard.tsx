import { Star } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Repository } from "@/models/Repository";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

interface RepositoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  repository: Repository;
}

export function RepositoryCard({
  className,
  repository,
  ...rest
}: RepositoryCardProps) {
  return (
    <Card className={cn("mb-2", className)} {...rest}>
      <CardHeader className="px-4 pb-0 pt-2">
        <CardTitle className="text-md flex items-center">
          {repository.name}
          <div className="ml-auto flex items-center gap-x-2">
            {repository.stargazers_count} <Star />
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="text-muted-foreground">{repository.description}</p>
      </CardContent>
    </Card>
  );
}
