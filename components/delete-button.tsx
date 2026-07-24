"use client";

import { deletePost } from "@/app/actions";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  async function handleDelete() {
    const result = await deletePost(id);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }
  return <Trash2 onClick={handleDelete} className="w-4 h-4 cursor-pointer" />;
}
