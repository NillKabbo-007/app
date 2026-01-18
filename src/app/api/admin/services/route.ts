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
  const items = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const ok = await requireAdmin();
  if (!ok) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const created = await prisma.service.create({
    data: {
      name: String(body.name),
      category: String(body.category),
      price: Number(body.price),
      isActive: Boolean(body.isActive),
    },
  });
  return NextResponse.json(created);
}
