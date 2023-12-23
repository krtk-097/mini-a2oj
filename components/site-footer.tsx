import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";


export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <div className="mr-2 flex items-center space-x-2 md:mr-6">
          <Image
            alt="profile pic"
            src="https://avatars.githubusercontent.com/u/111875474?v=4"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="hidden font-bold md:inline-block">
            Kartik Sharma
          </span>
        </div>
        <div className="mr-2 flex items-center space-x-2 md:mr-6">
          <a href="https://twitter.com/Krma_097" target="_blank">
            <Button variant="outline" size="icon">
              <Twitter className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a href="https://github.com/krtk-097" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
