import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center min-h-[80vh] items-center gap-3 text-muted-foreground">
      <Spinner className="size-4" />
      Loading posts...
    </div>
  );
}
