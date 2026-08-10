"use client";

import { Input } from "@/components/ui/input";
import { createPost, FormState } from "../actions";
import BackButton from "@/components/button/back-button";
import { MarkdownEditor } from "@/components/editor/markdown-editor";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";

const initialState: FormState = {};

export default function Page() {
  const [content, setContent] = useState("");
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState,
  );
  return (
    <div className="mt-4">
      <BackButton />
      <h2 className="text-2xl text-center mb-6">Create a Post</h2>
      <form action={formAction}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-7xl mx-auto w-full p-4">
          <Input
            type="text"
            name="author_name"
            placeholder="Author"
            className="input h-12"
          />

          {state.errors?.author_name && (
            <p className="text-sm text-destructive">
              {state.errors.author_name[0]}
            </p>
          )}

          <Input
            type="text"
            name="title"
            placeholder="Blog title"
            className="input h-12"
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

          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
