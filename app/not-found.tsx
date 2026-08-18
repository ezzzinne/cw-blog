import Link from "next/link";
import { ArrowRight, House } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
      <section className="relative w-full max-w-3xl text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <p className="mt-8 text-sm font-bold tracking-[0.2em] text-primary uppercase">
          Error 404
        </p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-[-0.06em] sm:text-6xl">
          This page does not exist.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
          The link may be outdated, or the page may have been moved. Let&apos;s
          get you back to the stories worth reading.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full px-6 shadow-lg shadow-primary/20"
          >
            <Link href="/" className="flex items-center gap-2">
              <House />
              Back home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-foreground/15 bg-card/70 px-6"
          >
            <Link href="/explore" className="flex items-center gap-2">
              Explore posts
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
