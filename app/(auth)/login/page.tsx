"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { PasswordInput } from "@/components/password-input";

function getFirebaseAuthError(error: unknown): string {
  if (!(error instanceof FirebaseError)) {
    return "Something went wrong. Please try again.";
  }

  switch (error.code) {
    case "auth/invalid-credential":
      return "Invalid email or password.";

    case "auth/user-not-found":
      return "Invalid email or password.";

    case "auth/wrong-password":
      return "Invalid email or password.";

    case "auth/invalid-email":
      return "Please enter a valid email address.";

    case "auth/user-disabled":
      return "This account has been disabled.";

    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";

    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";

    default:
      return "Unable to log in. Please try again.";
  }
}

const loginSchema = z.object({
  email: z.email("Please enter a valid email.").trim().toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(128, "Password must not exceed 128 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9\s]/,
      "Password must contain at least one special character.",
    ),
});

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
  }>({});

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoggingIn(true);

    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const result = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      if (!result.success) {
        setErrors(z.flattenError(result.error).fieldErrors);

        return;
      }

      const { email, password } = result.data;

      await signInWithEmailAndPassword(auth, email, password);

      router.push("/explore");
    } catch (error) {
      setError(getFirebaseAuthError(error));
    } finally {
      setIsLoggingIn(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-5 py-12 sm:px-8">
      <Card className="w-full max-w-md border border-border/70 bg-card/90 py-7 shadow-2xl shadow-primary/10">
        <CardHeader className="pb-2">
          <span className="mx-auto mb-3 grid size-11 place-items-center rounded-2xl bg-secondary text-lg font-extrabold text-primary">
            B
          </span>
          <CardTitle className="text-center text-3xl font-extrabold tracking-[-0.04em]">
            Welcome back
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form noValidate onSubmit={handleSubmit} className="space-y-5 pt-3">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                className="h-11 bg-background/70"
                onChange={() => {
                  setErrors((prev) => ({
                    ...prev,
                    email: undefined,
                  }));
                }}
              />

              {errors.email && (
                <p className="text-sm text-destructive">{errors.email[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                type="password"
                name="password"
                id="password"
                className="h-11 bg-background/70"
                onChange={() => {
                  setErrors((prev) => ({
                    ...prev,
                    password: undefined,
                  }));
                }}
              />

              {errors.password && (
                <p className="text-sm text-destructive">{errors.password[0]}</p>
              )}
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              className="h-11 w-full cursor-pointer rounded-full shadow-md shadow-primary/20"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
