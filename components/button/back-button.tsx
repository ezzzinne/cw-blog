"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="underline my-2">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
}
