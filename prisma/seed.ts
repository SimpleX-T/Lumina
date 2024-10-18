import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const videos = [
	{
		url: "https://www.youtube.com/embed/7YgG18LJ1Zw?si=h8JHaLGT09eLM_Uk",
		title: "Base Journey",
	},
	{
		url: "https://www.youtube.com/embed/FbGLC3fvpdM?si=bGYkhYbM3vUgKwkT",
		title: "Base Vision",
	},
	{
		url: "https://www.youtube.com/embed/YJoz_rCV2bY?si=FBTNC7U96XrPk3tJ",
		title: "Why Onchain",
	},
	{
		url: "https://www.youtube.com/embed/7YgG18LJ1Zw?si=h8JHaLGT09eLM_Uk",
		title: "Base Journey",
	},
];

async function main() {
	videos.forEach(async (video) => {
		await prisma.baseVideo.upsert({
			where: {title: video.title},
			update: {},
			create: {...video},
		});
	});
}
main()
	.then(() => prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
