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
      <div className="text-center space-y-2">
        <p className="text-sm text-destructive">
          Something went wrong. {error.message}
        </p>
        <Button onClick={() => reset()} className="mt-2 p-2 text-white">
          Retry
        </Button>
      </div>
    </div>
  );
}
