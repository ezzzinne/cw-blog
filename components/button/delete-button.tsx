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
import { deletePost } from "@/app/actions";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  async function handleDelete() {
    try {
      const result = await deletePost(id);

      setOpen(false);

      toast.success(result.message);

      router.push("/");

      router.refresh();
    } catch {
      toast.error("Failed to delete post.");
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Trash2 className="cursor-pointer w-4 h-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[calc(100vw-2rem)] sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure you want to delete this post?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            This post will be deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleDelete} className="bg-destructive text-white">
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
