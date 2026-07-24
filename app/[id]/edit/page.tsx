import EditForm from "@/components/edit-form";

type EditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPage({ params }: EditPageProps) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/api/blogs/${id}`);

  const post = await res.json();

  return <EditForm post={post} />;
}
