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
    <div className="mx-auto w-full max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
      <BackButton />
      <div className="mb-8 mt-6 text-center">
        <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">Your draft</span>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tighter">Create a post</h2>
        <p className="mt-3 text-muted-foreground">Give your ideas a beautiful place to land.</p>
      </div>
      <form action={formAction}>
        <div className="flex w-full flex-col items-center gap-6 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/5 sm:p-8">
          <Input
            type="text"
            name="author_name"
            placeholder="Author"
            className="input h-12 bg-background/70"
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

          <Button type="submit" disabled={isPending} className="h-11 rounded-full px-6 shadow-md shadow-primary/20">
            {isPending ? "Creating..." : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
