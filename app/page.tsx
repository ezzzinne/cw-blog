import Link from "next/link";
import { BarChart3, Edit3, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Markdown Editor",
    description: "Write articles using a markdown editor.",
    icon: Edit3,
  },
  {
    title: "Article discovery",
    description: "Read blogs from other authors",
    icon: Search,
  },
  {
    title: "Blog bank",
    description: "View all published blogs in one place",
    icon: BarChart3,
  },
];

export default function HomePage() {
  return (
    <main className="flex-1 overflow-hidden text-foreground">
      <section className="relative">
        <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pt-28">
          <div className="flex flex-col justify-center">
            <span className="mb-6 w-fit rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-bold tracking-[0.16em] text-primary uppercase">A home for good ideas</span>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Write ideas worth sharing.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Create, edit, and publish beautiful blog posts with a
              distraction-free Markdown editor.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-6 shadow-lg shadow-primary/20">
                <Link href="/signup">Start writing</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full border-foreground/15 bg-card/70 px-6">
                <Link href="/explore">Explore posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="rounded-2xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <CardHeader>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" strokeWidth={2.3} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <footer className="mt-auto border-t border-border/70 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} BlogPage. Built for publishing
            blogs.
          </p>
          <div className="flex gap-4">
            <Link href="/login" className="transition-colors hover:text-primary">
              Sign in
            </Link>
            <Link href="/signup" className="transition-colors hover:text-primary">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
