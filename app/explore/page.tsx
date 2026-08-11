"use server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

type PostProps = {
  id: number;
  title: string;
  content: string;
  author_name: string;
};

export default async function ExplorePage() {
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

  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-[75vh] flex-col items-center justify-center gap-3 px-5 text-center text-muted-foreground">
        <p className="text-xl font-bold text-foreground">No stories here yet.</p>
        <p className="mt-1 text-sm">Be the first to share something worth reading.</p>
      </div>
    );
  }

  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">Discover</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tighter sm:text-5xl">Fresh perspectives, thoughtfully written.</h1>
          <p className="mt-4 leading-7 text-muted-foreground">A living collection of ideas, notes, and stories from the community.</p>
        </div>
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post: PostProps) => (
          <Card key={post.id} className="flex h-full flex-col justify-between border border-border/70 bg-card/85 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
            <CardHeader className="flex flex-col justify-between transition-all">
              <CardTitle className="text-2xl font-bold leading-snug tracking-[-0.03em] line-clamp-2 transition-colors group-hover/card:text-primary">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="line-clamp-3 text-muted-foreground leading-7">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {truncateText(post.content)}
              </ReactMarkdown>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground leading-6">
              <span className="text-xs font-semibold tracking-wide uppercase">Article</span>
              <Link
                href={`/${post.id}/blog`}
                className="font-bold text-primary transition-transform hover:translate-x-0.5"
              >
                <p aria-label={`Read more about ${post.title}`}>Read More</p>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div></main>
    </>
  );
}
