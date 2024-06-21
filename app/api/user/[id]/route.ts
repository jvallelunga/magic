import prisma from "lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findFirst({
    where: { id: params.id },
  });

  return Response.json({ user });
}