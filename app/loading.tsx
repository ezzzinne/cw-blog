export default function Loading() {
  return (
    <main className="flex-1 animate-pulse overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl">
          <div className="h-6 w-48 rounded-full bg-primary/15" />
          <div className="mt-7 h-14 w-full max-w-3xl rounded-2xl bg-muted sm:h-16" />
          <div className="mt-3 h-14 w-3/4 max-w-2xl rounded-2xl bg-muted sm:h-16" />
          <div className="mt-8 space-y-3">
            <div className="h-5 w-full max-w-2xl rounded-lg bg-muted/80" />
            <div className="h-5 w-4/5 max-w-xl rounded-lg bg-muted/80" />
          </div>
          <div className="mt-10 flex gap-3">
            <div className="h-12 w-32 rounded-full bg-primary/20" />
            <div className="h-12 w-32 rounded-full bg-muted" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-2xl border border-border/70 bg-card/80 p-5 sm:p-6">
              <div className="size-11 rounded-xl bg-secondary" />
              <div className="mt-5 h-5 w-3/4 rounded-lg bg-muted" />
              <div className="mt-4 h-4 w-full rounded bg-muted/80" />
              <div className="mt-2 h-4 w-2/3 rounded bg-muted/80" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
