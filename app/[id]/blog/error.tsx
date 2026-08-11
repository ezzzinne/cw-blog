"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="space-y-3 rounded-2xl border border-destructive/20 bg-card/90 p-8 text-center shadow-xl shadow-primary/5">
        <p className="text-sm text-destructive">
          Something went wrong. {error.message}
        </p>
        <Button onClick={() => reset()} className="mt-2 rounded-full px-4 text-white">
          Retry
        </Button>
      </div>
    </div>
  );
}
