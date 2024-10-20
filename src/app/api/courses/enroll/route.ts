import {prisma} from "@/lib/prisma";
import {z} from "zod";

export async function POST(req: Request) {
	const schema = z.object({
		courseId: z.number({required_error: "course id not specific."}),
		wallet_address: z.string({required_error: "wallet not specific "}),
	});

	const data = await req.json();

	const result = schema.safeParse(data);

	if (!result.success) {
		const {errors} = result.error;

		return Response.json(
			{error: {message: "Invalid request", errors}},
			{status: 400}
		);
	}

	try {
		const course = await prisma.course.findFirst({
			where: {id: data.courseId},
		});

		const user = await prisma.user.findFirst({
			where: {wallet_address: data.wallet_address},
		});

		const enrollment = await prisma.enrollment.create({
			data: {
				userId: user?.id as string,
				courseId: course?.id as string,
			},
		});

		return Response.json({
			success: true,
			message: "Course successfully enrolled.",
			data: enrollment,
		});
	} catch (err) {
		return Response.json(
			{
				error: err,
			},
			{status: 500}
		);
	}
}

export async function GET(req: Request) {
    const schema = z.object({
        id: z.string()
    })

    const data = await req.json();
    
    const result = schema.safeParse(data);

	if (!result.success) {
		const {errors} = result.error;

		return Response.json(
			{error: {message: "Invalid request", errors}},
			{status: 400}
		);
	}

}

