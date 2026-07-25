import { editPost } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import BackButton from "./back-button";

type Post = {
  id: number;
  title: string;
  content: string;
};

type EditFormProps = {
  post: Post;
};

export default function EditForm({ post }: EditFormProps) {
  return (
    <div className="mt-4">
      <BackButton />

      <h2 className="text-2xl text-center mb-6">Edit Post</h2>

      <form action={editPost}>
        <div className="flex flex-col justify-between items-center gap-6 max-w-7xl mx-auto w-full">
          <Input type="hidden" name="id" defaultValue={post.id} />

          <Input
            type="text"
            name="title"
            defaultValue={post.title}
            placeholder="Blog title"
            className="input h-12"
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
    </div>
  );
}
