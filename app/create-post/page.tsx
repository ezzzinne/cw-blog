"use client";

import { Input } from "@/components/ui/input";
import { createPost } from "../actions";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="mt-4 underline">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>
      <h2 className="text-2xl text-center my-6">Create a Post</h2>
      <form action={createPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-96 mx-auto w-full">
          <Input
            type="text"
            name="author_name"
            placeholder="Author"
            className="input"
            required
          />
          <Input
            type="text"
            name="title"
            placeholder="Blog title"
            className="input"
            required
          />
          <Textarea
            name="content"
            placeholder="Content"
            className="input h-72"
            required
          />
          <Button type="submit">Create</Button>
        </div>
      </form>
    </>
  );
}
