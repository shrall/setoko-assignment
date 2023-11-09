import * as React from "react";

import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-6xl lg:px-8">
        <Header />
        {children}
      </div>
    </div>
  );
}
