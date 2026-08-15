export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-5xl animate-pulse px-5 py-6 sm:px-8 sm:py-10">
      <div className="h-8 w-24 rounded-full bg-muted" />
      <div className="mb-8 mt-8 text-center">
        <div className="mx-auto h-3 w-28 rounded-full bg-primary/15" />
        <div className="mx-auto mt-4 h-10 w-44 rounded-xl bg-muted" />
      </div>
      <div className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/5 sm:p-8">
        <div className="space-y-5">
          <div className="h-12 w-full rounded-xl bg-muted" />
          <div className="h-72 w-full rounded-xl bg-muted/80" />
          <div className="ml-auto h-11 w-28 rounded-full bg-primary/20" />
        </div>
      </div>
    </main>
  );
}
