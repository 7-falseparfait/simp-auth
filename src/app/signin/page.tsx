import SignIn from "@/components/sign-in";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <SignIn />
      <div className="mt-6 text-center text-sm text-gray-600">
        New here?{" "}
        <Link
          href="/signup"
          className="text-blue-600 font-medium hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
