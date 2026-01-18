import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold">Social Stack</h1>
          <p className="text-xs opacity-70">SMM • Ads • Automation • Tools</p>
        </div>

        <div className="flex gap-2">
          <Link href="/login" className="border rounded-xl px-4 py-2 text-sm">
            Login
          </Link>
          <Link href="/admin" className="bg-black text-white rounded-xl px-4 py-2 text-sm">
            Admin Panel
          </Link>
        </div>
      </header>

      <main className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">
            One dashboard.<br />All digital power.
          </h2>
          <p className="mt-4 opacity-70">
            SMM panel, ads analytics, payments, file manager, news & trending —
            everything in one place.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/login" className="bg-black text-white rounded-xl px-5 py-3 text-sm">
              Get Started
            </Link>
            <Link href="/dashboard" className="border rounded-xl px-5 py-3 text-sm">
              User Dashboard
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border p-6 shadow-sm">
          <h3 className="font-semibold mb-3">Business Info</h3>
          <div className="text-sm space-y-1 opacity-80">
            <div><b>BM Name:</b> Social Stack</div>
            <div>Dhaka Uttara Rab - 1 1230 P/O</div>
            <div><b>WhatsApp / Phone:</b> +8801765067423</div>
            <div><b>Facebook Page:</b> Social stack</div>
          </div>
        </div>
      </main>
    </div>
  );
}
