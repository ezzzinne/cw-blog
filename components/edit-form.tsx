"use client";

import { editPost } from "@/app/actions";
import { Input } from "./ui/input";
import BackButton from "./button/back-button";
import { EditButton } from "./button/edit-button";
import { MarkdownEditor } from "./editor/markdown-editor";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

type EditFormProps = {
  post: Post;
};

export default function EditForm({ post }: EditFormProps) {
  const [content, setContent] = useState(post.content);

  return (
    <div className="mt-4">
      <BackButton />

      <h2 className="text-2xl text-center mb-6">Edit Post</h2>

      <form action={editPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-7xl mx-auto w-full p-4">
          <Input type="hidden" name="id" defaultValue={post.id} />

          <Input
            type="text"
            name="title"
            defaultValue={post.title}
            placeholder="Blog title"
            className="input h-12"
            required
          />

          <MarkdownEditor
            value={content}
            onChange={(value) => setContent(value || "")}
          />

          <Input type="hidden" name="content" value={content} />

          <EditButton />
        </div>
      </form>
    </div>
  );
}
