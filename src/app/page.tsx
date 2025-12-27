// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold text-gray-900">Better Auth Demo</h1>
        <p className="text-gray-600 text-center max-w-md">
          A simple authentication flow using Better Auth, Next.js, and SQLite.
        </p>

        <div className="flex gap-4">
          <Link
            href="/signin"
            className="px-6 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2.5 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium"
          >
            Create Account
          </Link>
        </div>
      </main>
    </div>
  );
}
