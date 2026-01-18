import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@socialstack.com" },
    update: {},
    create: {
      email: "admin@socialstack.com",
      password: hashed,
      name: "Admin",
      role: "ADMIN",
    },
  });

  const services = [
    { name: "Instagram Followers - 1K", category: "SMM", price: 3.5, isActive: true },
    { name: "Facebook Page Likes - 1K", category: "SMM", price: 4.0, isActive: true },
    { name: "RDP - 1 Month", category: "RDP/VPS", price: 12.0, isActive: true },
    { name: "OTP (5 SIM) - 1 Day", category: "OTP", price: 2.0, isActive: true },
    { name: "AI Content Pack", category: "AI", price: 5.0, isActive: true },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { name: s.name },
      update: { category: s.category, price: s.price, isActive: s.isActive },
      create: s,
    });
  }

  console.log("✅ Seed done: admin + demo services");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
