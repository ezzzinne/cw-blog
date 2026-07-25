import BackButton from "@/components/back-button";
import DeleteButton from "@/components/delete-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <>
      <Card key={post.id} className="m-6">
        <BackButton />
        <CardHeader className="flex flex-col justify-between transition-all">
          <CardTitle className="text-3xl font-bold tracking-tight mb-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="text-muted-foreground leading-6">
          <article className="max-w-none text-base leading-8 [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_p]:mb-6 [&_ul]:mb-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic">
            {post.content}
          </article>
        </CardContent>
        <CardFooter className="flex justify-between text-sm font-semibold leading-tight truncate">
          <p>Author: {post.author_name}</p>
          <div className="flex gap-3">
            <Link href={`/${post.id}/edit`}>
              <Pencil className="h-4 w-4" />
            </Link>
            <DeleteButton id={post.id} />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
