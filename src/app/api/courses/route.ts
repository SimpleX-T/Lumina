import {prisma} from "@/lib/prisma";

export async function POST(req: Request) {
	const data = await req.json();
}

export async function GET() {
	const courses = await prisma.course.findMany();

	return Response.json({success: true, data: courses});
}


