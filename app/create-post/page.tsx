"use client";

import { Input } from "@/components/ui/input";
import { createPost } from "../actions";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/back-button";

export default function Page() {
  return (
    <div className="mt-4">
      <BackButton />
      <h2 className="text-2xl text-center mb-6">Create a Post</h2>
      <form action={createPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-7xl mx-auto w-full">
          <Input
            type="text"
            name="author_name"
            placeholder="Author"
            className="input h-12"
            required
          />
          <Input
            type="text"
            name="title"
            placeholder="Blog title"
            className="input h-12"
            required
          />
          <Textarea
            name="content"
            placeholder="Content"
            className="input h-60 resize-none"
            required
          />
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
}
