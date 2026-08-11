export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl animate-pulse px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-10 max-w-2xl space-y-4">
        <div className="h-3 w-20 rounded-full bg-primary/15" />
        <div className="h-11 w-4/5 rounded-xl bg-muted" />
        <div className="h-5 w-full rounded-lg bg-muted/80" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="rounded-xl border border-border/70 bg-card/80 p-5 sm:p-6">
            <div className="h-7 w-4/5 rounded-lg bg-muted" />
            <div className="mt-5 space-y-3">
              <div className="h-4 w-full rounded bg-muted/80" />
              <div className="h-4 w-5/6 rounded bg-muted/80" />
              <div className="h-4 w-2/3 rounded bg-muted/80" />
            </div>
            <div className="mt-8 h-3 w-20 rounded-full bg-primary/15" />
          </div>
        ))}
      </div>
    </main>
  );
}
