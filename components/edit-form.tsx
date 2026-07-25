"use client";

import { editPost } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Post = {
  id: number;
  title: string;
  content: string;
};

type EditFormProps = {
  post: Post;
};

export default function EditForm({ post }: EditFormProps) {
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

      <h2 className="text-2xl text-center my-6">Edit Post</h2>

      <form action={editPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-96 mx-auto w-full">
          <Input type="hidden" name="id" defaultValue={post.id} />

          <Input
            type="text"
            name="title"
            defaultValue={post.title}
            placeholder="Blog title"
            className="input"
            required
          />
          <Textarea
            name="content"
            defaultValue={post.content}
            placeholder="Content"
            className="input h-72"
            required
          />
          <Button type="submit">Edit</Button>
        </div>
      </form>
    </>
  );
}
