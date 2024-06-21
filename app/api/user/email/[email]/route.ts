import prisma from "lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findFirst({
    where: { email: params.email },
  });

  return Response.json({ user });
}