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

	try {
		const user = await prisma.user.upsert({
			where: {wallet_address: data.wallet_address},
			update: {},
			create: {
				wallet_address: data.walllet_address,
			},
		});

		return Response.json({
			success: true,
			message: "Account created successfully.",
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
