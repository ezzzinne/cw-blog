"use server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type PostProps = {
  id: number;
  title: string;
  content: string;
  author_name: string;
};

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error(`Request failed: ${data.status}`);
  }

  const posts = await data.json();

  const truncateText = (text: string, maxLength = 80) => {
    if (!text) return "";

    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="flex flex-col gap-6 m-6">
        {posts.map((post: PostProps) => (
          <Card key={post.id} className="flex flex-col justify-between h-full">
            <CardHeader className="flex flex-col justify-between rounded-2xl transition-all">
              <CardTitle className="text-2xl leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-6">
              <p>{truncateText(post.content)}</p>
            </CardContent>
            <CardFooter className="flex justify-end text-sm text-muted-foreground leading-6">
              <Link
                href={`/${post.id}/blog`}
                className="underline font-semibold text-black"
              >
                <p>Read More</p>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
