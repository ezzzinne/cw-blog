"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "A title is required." })
    .max(100, "Title must be 100 characters or less"),
  content: z.string().trim().min(1, { message: "Blog content is required." }),
  author_name: z
    .string()
    .trim()
    .min(1, { message: "Author name is required." })
    .max(50, "Author name must be 50 characters or less"),
});

const editSchema = postSchema.omit({
  author_name: true,
});

export type FormState = {
  errors?: {
    title?: string[];
    content?: string[];
    author_name?: string[];
  };
};

export type EditState = {
  errors?: {
    title?: string[];
    content?: string[];
  };
};

export async function createPost(prevState: FormState, formData: FormData) {
  const result = postSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    author_name: formData.get("author_name"),
  });

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return {
      errors: errors.fieldErrors,
    };
  }

  const { title, content, author_name } = result.data;

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, author_name }),
  });

  if (!res.ok) {
    return {
      message: "Failed to create post.",
    };
  }

  revalidatePath("/explore");
  redirect("/explore");
}

export async function editPost(
  id: number,
  prevState: EditState,
  formData: FormData,
) {
  const result = editSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return {
      errors: errors.fieldErrors,
    };
  }

  const { title, content } = result.data;

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    return {
      message: "Failed to update post.",
    };
  }

  revalidatePath(`/${id}/blog`);

  redirect(`/${id}/blog`);
}

export async function deletePost(id: number) {
  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete post`);
  }

  revalidatePath("/explore");

  return {
    success: true,
    message: "Post deleted successfully",
  };
}
