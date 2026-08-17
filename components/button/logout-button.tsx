"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { LogOut } from "lucide-react";

export default function LogOutButton() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  async function handleLogOut() {
    await signOut(auth);

    setOpen(false);

    router.replace("/login");

    router.refresh();
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
        aria-label="Log out"
      >
        <span>Log out</span>
        <LogOut className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[calc(100vw-2rem)] sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure you want to log out of Blog Page?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            You will be logged out.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={handleLogOut}
            className="bg-destructive text-white hover:bg-destructive/85"
          >
            Log out
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
