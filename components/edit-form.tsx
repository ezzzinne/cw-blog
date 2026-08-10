"use client";

import { editPost, EditState } from "@/app/actions";
import { Input } from "./ui/input";
import BackButton from "./button/back-button";
import { MarkdownEditor } from "./editor/markdown-editor";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  title: string;
  content: string;
};

type EditFormProps = {
  post: Post;
};

const initialState: EditState = {};

export default function EditForm({ post }: EditFormProps) {
  const [content, setContent] = useState(post.content);

  const editPostWithId = editPost.bind(null, post.id);

  const [state, formAction, isPending] = useActionState(
    editPostWithId,
    initialState,
  );

  return (
    <div className="mt-4">
      <BackButton />

      <h2 className="text-2xl text-center mb-6">Edit Post</h2>

      <form action={formAction}>
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

          {state.errors?.title && <p>{state.errors.title[0]}</p>}

          <MarkdownEditor
            value={content}
            onChange={(value) => setContent(value || "")}
          />

          <Input type="hidden" name="content" value={content} />

          {state.errors?.content && <p>{state.errors.content}</p>}

          <Button type="submit" disabled={isPending}>
            {isPending ? "Editing..." : "Edit Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
