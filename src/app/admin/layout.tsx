import Link from "next/link";
import {
  LayoutDashboard,
  Layers,
  CreditCard,
  Folder,
  Newspaper,
  Flame,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[280px_1fr]">
      <aside className="border-r p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-black" />
          <div>
            <div className="font-extrabold text-lg">Social Stack</div>
            <div className="text-xs opacity-70">Admin Control Panel</div>
          </div>
        </div>

        <nav className="mt-6 space-y-1 text-sm">
          <Item href="/admin" icon={<LayoutDashboard size={18} />} label="Overview" />
          <Item href="/admin/sections" icon={<Layers size={18} />} label="All Sections" />
          <Item href="/admin/payments" icon={<CreditCard size={18} />} label="Payments" />
          <Item href="/admin/files" icon={<Folder size={18} />} label="File Manager" />
          <Item href="/admin/news" icon={<Newspaper size={18} />} label="News Feed" />
          <Item href="/admin/trending" icon={<Flame size={18} />} label="Trending" />
          <Item href="/admin/policies" icon={<Shield size={18} />} label="Policies" />
          <Item href="/admin/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>

        <div className="mt-8 rounded-2xl border p-4 text-xs space-y-1">
          <div className="font-semibold text-sm mb-1">Business Info</div>
          <div><b>BM Name:</b> Social Stack</div>
          <div>Dhaka Uttara Rab - 1 1230 P/O</div>
          <div><b>WhatsApp / Phone:</b> +8801765067423</div>
          <div><b>FB Page:</b> Social stack</div>
        </div>

        <Link
          href="/api/auth/signout?callbackUrl=/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-black/5 transition"
        >
          <LogOut size={18} />
          Logout
        </Link>
      </aside>

      <main className="p-6">{children}</main>
    </div>
  );
}

function Item({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-black/5 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
