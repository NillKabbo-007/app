import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold">Admin Panel</h1>
      <p className="opacity-70">Welcome to Social Stack</p>

      <Link
        className="inline-flex rounded-xl border px-4 py-2 text-sm hover:bg-black/5 transition"
        href="/api/auth/signout?callbackUrl=/"
      >
        Logout
      </Link>
    </div>
  );
}
