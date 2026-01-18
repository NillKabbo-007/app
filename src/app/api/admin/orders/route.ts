import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const role = (session as any)?.role;
  if (!session || role !== "ADMIN") return null;
  return session;
}

export async function GET() {
  const ok = await requireAdmin();
  if (!ok) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const items = await prisma.order.findMany({
    include: { user: true, service: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}
