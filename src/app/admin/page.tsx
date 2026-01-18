import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-extrabold">Admin Panel</h1>
      <p className="opacity-70 mt-1">Welcome to Social Stack</p>

      <Link
        href="/api/auth/signout?callbackUrl=/"
        className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm hover:bg-black/5 transition"
      >
        Logout
      </Link>
    </div>
  );
}
