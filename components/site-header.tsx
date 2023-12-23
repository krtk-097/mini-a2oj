import Link from "next/link";
import { Mountain } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <Link href="/" className="mr-2 flex items-center space-x-2 md:mr-6">
          <Mountain className="h-4 w-4" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
