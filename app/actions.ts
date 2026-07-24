"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const author_name = formData.get("author_name");

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, author_name }),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  revalidatePath("/");
  redirect("/");
}

export async function editPost(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    throw new Error("Failed to update post");
  }

  revalidatePath("/");

  redirect("/");
}

export async function deletePost(id: number) {
  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Post deleted successfully",
  };
}
