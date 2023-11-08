import { Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex flex-col items-center justify-between gap-x-2 gap-y-4 sm:h-14 sm:flex-wrap sm:items-baseline sm:justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-600">
          Github Repositories Explorer
        </Link>
        <Separator className="block sm:hidden" />
        <div className="ml-auto flex w-full items-center sm:w-fit">
          <Input placeholder="Search user..." />
        </div>
        <Button className="flex w-full sm:hidden">
          Search <Search className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
