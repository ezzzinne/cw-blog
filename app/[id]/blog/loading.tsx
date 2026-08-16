export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-4xl animate-pulse px-5 py-6 sm:px-8 sm:py-10">
      <div className="rounded-xl border border-border/70 bg-card/85 p-5 shadow-xl shadow-primary/5 sm:p-10">
        <div className="mb-10 h-8 w-24 rounded-full bg-muted" />
        <div className="h-3 w-24 rounded-full bg-primary/15" />
        <div className="mt-5 h-12 w-11/12 rounded-xl bg-muted sm:h-16" />
        <div className="mt-3 h-12 w-3/4 rounded-xl bg-muted sm:h-16" />
        <div className="my-8 border-t border-border/70" />
        <div className="space-y-4">
          <div className="h-5 w-full rounded bg-muted/80" />
          <div className="h-5 w-full rounded bg-muted/80" />
          <div className="h-5 w-5/6 rounded bg-muted/80" />
          <div className="h-5 w-full rounded bg-muted/80" />
          <div className="h-5 w-3/5 rounded bg-muted/80" />
        </div>
      </div>
    </main>
  );
}
