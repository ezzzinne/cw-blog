"use server";

import DeleteButton from "@/components/delete-button";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PostProps = {
  id: number;
  title: string;
  content: string;
  author_name: string;
};

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs`);

  if (!data.ok) {
    throw new Error(`Request failed: ${data.status}`);
  }

  const posts = await data.json();

  return (
    <>
      <Navbar />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 m-6">
        {posts.map((post: PostProps) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-col justify-between rounded-2xl transition-all">
              <CardTitle className="text-2xl leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-6">
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground leading-6">
              <p>Author: {post.author_name}</p>
              <div>
                <DeleteButton id={post.id} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
