import {prisma} from "@/lib/prisma";
import {z} from "zod";

export async function POST(req: Request) {
	const schema = z.object({
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

	const {wallet_address} = result.data;

	try {
		const user = await prisma.user.findFirst({
			where: {wallet_address: wallet_address},
		});

		return Response.json({
			success: !!user,
			data: user,
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
