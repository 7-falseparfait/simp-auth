import SignUp from "@/components/sign-up";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <SignUp />
      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-blue-600 font-medium hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
