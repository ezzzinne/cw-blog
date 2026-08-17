import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();

  const session = cookieStore.get("session")?.value;

  if (!session) {
    return null;
  }

  try {
    const decodedToken = await adminAuth.verifySessionCookie(session, true);

    return decodedToken;
  } catch {
    return null;
  }
}
