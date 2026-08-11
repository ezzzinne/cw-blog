import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="text-lg font-extrabold tracking-tighter sm:text-xl">
          <div className="cursor-pointer transition-opacity hover:opacity-70">
            <Link href={"/"} className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-primary text-sm text-primary-foreground shadow-sm">B</span>Blog Page</Link>
          </div>
        </div>
        {/* <div className="flex">
          <Button variant="link" className="font-semibold">
            <Link href={"/"}>Feed</Link>
          </Button>
          <Button variant="link" className="font-semibold">
            <Link href={"/"}>My blogs</Link>
          </Button>
        </div> */}
        <div className="flex items-center gap-2">
          {/* <Button variant="outline" className="cursor-pointer">
            <Link href="/login">Login</Link>
          </Button>

          <Button className="h-10 cursor-pointer rounded-full px-4 shadow-sm shadow-primary/20">
            <Link href="/register">Sign Up</Link>
          </Button> */}
          <Button className="cursor-pointer">
            <PlusIcon />
            <Link href={"/create-post"}>Write</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
