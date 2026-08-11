import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-5 py-12 sm:px-8">
      <Card className="w-full max-w-md border border-border/70 bg-card/90 py-7 shadow-2xl shadow-primary/10">
        <CardHeader className="pb-2">
          <span className="mx-auto mb-3 grid size-11 place-items-center rounded-2xl bg-secondary text-lg font-extrabold text-primary">B</span>
          <CardTitle className="text-center text-3xl font-extrabold tracking-[-0.04em]">Welcome back</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5 pt-3">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="h-11 bg-background/70" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" className="h-11 bg-background/70" />
            </div>

            <Button type="submit" className="h-11 w-full cursor-pointer rounded-full shadow-md shadow-primary/20">
              Login
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Don’t have an account?{" "}
              <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
