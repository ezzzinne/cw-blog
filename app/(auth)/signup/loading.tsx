export default function Loading() {
  return (
    <main className="flex min-h-[calc(100vh-4.5rem)] animate-pulse items-center justify-center px-5 py-12 sm:px-8">
      <div className="w-full max-w-md rounded-2xl border border-border/70 bg-card/90 p-6 shadow-2xl shadow-primary/10 sm:p-8">
        <div className="mx-auto size-11 rounded-2xl bg-secondary" />
        <div className="mx-auto mt-5 h-8 w-52 rounded-xl bg-muted" />
        <div className="mt-10 space-y-6">
          {[0, 1, 2].map((item) => (
            <div key={item}>
              <div className="mb-2 h-4 w-16 rounded bg-muted/80" />
              <div className="h-11 w-full rounded-xl bg-muted" />
            </div>
          ))}
          <div className="h-11 w-full rounded-full bg-primary/20" />
          <div className="mx-auto h-4 w-48 rounded bg-muted/80" />
        </div>
      </div>
    </main>
  );
}
