"use client";

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (!user) {
        router.replace("/login");
      }
    });

    return unsubscribe;
  }, [router]);

  if (loading) {
    return (
      <main className="mx-auto w-full max-w-5xl animate-pulse px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-8">
          <div className="h-3 w-24 rounded-full bg-primary/15" />
          <div className="mt-5 h-10 w-3/5 rounded-xl bg-muted" />
          <div className="mt-8 space-y-4">
            <div className="h-12 w-full rounded-xl bg-muted/80" />
            <div className="h-72 w-full rounded-xl bg-muted/80" />
            <div className="ml-auto h-11 w-28 rounded-full bg-primary/15" />
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return children;
}
