"use client";

import { Input } from "@/components/ui/input";
import { createPost } from "../actions";
import BackButton from "@/components/button/back-button";
import { CreateButton } from "@/components/button/create-button";
import { MarkdownEditor } from "@/components/editor/markdown-editor";
import { useState } from "react";

export default function Page() {
  const [content, setContent] = useState("");
  return (
    <div className="mt-4">
      <BackButton />
      <h2 className="text-2xl text-center mb-6">Create a Post</h2>
      <form action={createPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-7xl mx-auto w-full p-4">
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
          <MarkdownEditor
            value={content}
            onChange={(value) => setContent(value || "")}
          />
          <Input type="hidden" name="content" value={content} />
          <CreateButton />
        </div>
      </form>
    </div>
  );
}
