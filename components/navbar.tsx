"use client";

import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "@/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import LogOutButton from "./button/logout-button";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="text-lg font-extrabold tracking-tighter sm:text-xl">
          <div className="cursor-pointer transition-opacity hover:opacity-70">
            <Link href={"/"} className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-primary text-sm text-primary-foreground shadow-sm">
                B
              </span>
              Blog Page
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Button className="h-10 cursor-pointer rounded-full px-4 shadow-sm shadow-primary/20">
                <PlusIcon />
                <Link href={"/create-post"}>Write</Link>
              </Button>
              <LogOutButton />
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="h-10 cursor-pointer rounded-full px-3 font-semibold"
              >
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="h-10 cursor-pointer rounded-full px-4 shadow-sm shadow-primary/20">
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
