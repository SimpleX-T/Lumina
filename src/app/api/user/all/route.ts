import {prisma} from "@/lib/prisma";

export async function GET() {
	try {
		const users = await prisma.user.findMany();

		return Response.json({success: true, data: users});
	} catch (err) {
		return Response.json({success: false, error: err}, {status: 500});
	}
}
