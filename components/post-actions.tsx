import Link from "next/link";
import { Pencil } from "lucide-react";

import DeleteButton from "@/components/button/delete-button";
import { getAuthenticatedUser } from "@/lib/auth";

type PostActionsProps = {
  postId: number;
};

export default async function PostActions({ postId }: PostActionsProps) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 text-primary">
      <Link
        href={`/${postId}/edit`}
        className="transition-colors hover:text-foreground"
        aria-label="Edit post"
      >
        <Pencil className="h-4 w-4" />
      </Link>

      <DeleteButton id={postId} />
    </div>
  );
}
