"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="my-2">
      <Button
        variant="ghost"
        size="sm"
        className="flex cursor-pointer items-center gap-2 rounded-full px-3 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
}
