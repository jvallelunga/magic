import prisma from "lib/prisma";

export async function POST(
  request: Request
) {
  const data = await request.json()
  const need = await prisma.need.create({
    data,
  });

  return Response.json(need)
}

export async function GET(
  request: Request
) {
  const whereParam = request.nextUrl.searchParams.get("where");
  const where = whereParam ? { where: JSON.parse(whereParam) } : undefined;
  const needs = await prisma.need.findMany(where);

  return Response.json(needs)
}