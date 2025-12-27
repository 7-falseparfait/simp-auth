"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="p-4 border rounded shadow-sm bg-white min-w-[300px]">
        <p className="text-gray-600 mb-2">
          Signed in as:{" "}
          <span className="font-semibold text-black">
            {session?.user.email}
          </span>
        </p>
        <p className="text-xs text-gray-400">User ID: {session?.user.id}</p>
      </div>

      <button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/signin");
              },
            },
          });
        }}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Sign Out
      </button>
    </div>
  );
}
