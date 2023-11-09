import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { User } from "@/models/User";

import { AccordionTrigger } from "../ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export function UserCard({ user, ...rest }: UserCardProps) {
  return (
    <Card {...rest}>
      <AccordionTrigger className="px-4 py-0 focus:rounded-md focus:bg-primary-foreground focus:no-underline focus:ring-2 focus:ring-primary">
        <CardHeader className="flex-row items-center gap-4 space-y-0 px-0 py-3">
          <Avatar>
            <AvatarImage src={user.avatar_url} alt="@shadcn" />
            <AvatarFallback>{user.login.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl">{user.login}</CardTitle>
        </CardHeader>
      </AccordionTrigger>
    </Card>
  );
}
