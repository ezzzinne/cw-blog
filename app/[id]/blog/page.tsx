import BackButton from "@/components/button/back-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PostActions from "@/components/post-actions";

type BlogPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`);

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  if (!post) {
    return (
      <div className="flex flex-col justify-center min-h-[80vh] items-center gap-3 text-muted-foreground">
        <p className="font-medium max-w-full">This post has been deleted.</p>
      </div>
    );
  }

  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-5 py-6 sm:px-8 sm:py-10">
      <Card key={post.id} className="border border-border/70 bg-card/85 py-5 shadow-xl shadow-primary/5 sm:py-7">
        <div className="px-4 sm:px-8"><BackButton /></div>
        <CardHeader className="flex flex-col justify-between px-5 pt-6 sm:px-10 sm:pt-8">
          <span className="mb-4 text-xs font-bold tracking-[0.16em] text-primary uppercase">Featured story</span>
          <CardTitle className="mb-3 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
            {post.title}
          </CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="px-5 pt-8 text-muted-foreground sm:px-10">
          <article className="editorial-prose max-w-none text-[1.05rem] leading-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>
        </CardContent>
        <CardFooter className="flex justify-between rounded-b-xl bg-muted/55 px-5 py-5 text-sm font-semibold leading-tight sm:px-10">
          <p className="text-muted-foreground">Written by <span className="text-foreground">{post.author_name}</span></p>
          <PostActions postId={post.id} />
        </CardFooter>
      </Card></main>
    </>
  );
}
