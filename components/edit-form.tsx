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
    <div className="mx-auto w-full max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
      <BackButton />

      <div className="mb-8 mt-6 text-center">
        <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
          Refine your draft
        </span>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tighter">
          Edit post
        </h2>
      </div>

      <form action={formAction} aria-label="Edit post form">
        <div className="flex w-full flex-col items-center gap-6 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/5 sm:p-8">
          <Input type="hidden" name="id" defaultValue={post.id} />

          <Input
            type="text"
            name="title"
            defaultValue={post.title}
            placeholder="Blog title"
            className="input h-12 bg-background/70"
          />

          {state.errors?.title && (
            <p className="text-sm text-destructive">{state.errors.title[0]}</p>
          )}

          <MarkdownEditor
            value={content}
            onChange={(value) => setContent(value || "")}
          />

          <Input type="hidden" name="content" value={content} />

          {state.errors?.content && (
            <p className="text-sm text-destructive">{state.errors.content}</p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="h-11 rounded-full px-6 shadow-md shadow-primary/20"
          >
            {isPending ? "Editing..." : "Edit Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
