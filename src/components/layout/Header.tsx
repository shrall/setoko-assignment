import { useDebounce, useWindowSize } from "@uidotdev/usehooks";
import { Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useDispatch } from "react-redux";

import { updateSearchQuery } from "@/store/user";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function Header() {
  const dispatch = useDispatch();

  // NOTE - Search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // NOTE - Get screen width
  const size = useWindowSize();
  const screenWidth = size.width ? size.width : 0;

  // NOTE - Set a debounced search query and update the store automatically if the screen width is greater than 640px
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  React.useEffect(() => {
    if (screenWidth >= 640) dispatch(updateSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch, screenWidth]);

  return (
    <header className="sticky top-0 z-50 bg-white pt-4">
      <div className="flex flex-col items-center justify-between gap-x-2 gap-y-4 sm:h-14 sm:flex-wrap sm:items-baseline sm:justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-600">
          Github Repositories Explorer
        </Link>
        <Separator className="block sm:hidden" />
        <div className="ml-auto flex w-full items-center sm:w-fit">
          <Input
            placeholder="Search user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          onClick={() => dispatch(updateSearchQuery(searchQuery))}
          disabled={searchQuery === ""}
          className="flex w-full sm:hidden"
        >
          Search <Search className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
