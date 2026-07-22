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
  author: string;
};

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_API_BASE_URL}/posts`);
  const posts = await data.json();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {posts.data.map((post: PostProps) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-col justify-between rounded-2xl transition-all hover:shadow-lg">
            <CardTitle className="text-2xl leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-6">
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground leading-6">
            {post.author}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
