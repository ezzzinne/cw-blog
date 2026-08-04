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
    <main className="bg-background text-foreground">
      <section>
        <div className="mx-auto flex flex-col justify-center items-center max-w-7xl gap-10 px-4 sm:px-6 py-12 lg:px-8">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Write ideas worth sharing.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Create, edit, and publish beautiful blog posts with a
              distraction-free Markdown editor.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg">
                <Link href="/signup">Start writing</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/explore">Explore posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <footer className="border-t mt-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} BlogPage. Built for publishing
            blogs.
          </p>
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-foreground">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-foreground">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
