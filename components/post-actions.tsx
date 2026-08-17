"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { onAuthStateChanged, User } from "firebase/auth";

import DeleteButton from "@/components/button/delete-button";
import { auth } from "@/lib/firebase";

type PostActionsProps = {
  postId: number;
};

export default function PostActions({ postId }: PostActionsProps) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading || !user) {
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
