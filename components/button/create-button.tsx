"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function CreateButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create Post"}
    </Button>
  );
}
