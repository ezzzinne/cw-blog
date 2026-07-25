import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur z-50">
      <nav className="mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold tracking-tight">Blog Page</div>
        <div className="flex">
          <Link href={"/"}>
            <Button variant="link" className="font-semibold">
              Feed
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant="link" className="font-semibold">
              My blogs
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/create-post"}>
            <Button>
              <PlusIcon />
              Write Post
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
