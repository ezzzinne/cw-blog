"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur z-50">
      <nav className="mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold tracking-tight">Blog Page</div>
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/create-post")}>
            <PlusIcon />
            Write Post
          </Button>
        </div>
      </nav>
    </header>
  );
}
