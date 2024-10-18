import PageLayout from "@/components/layout/page-layout";
import VideoCard from "@/components/onchain/video-card";
import {prisma} from "@/lib/prisma";

export default async function Onchain() {
	const videos = await prisma.baseVideo.findMany();
	console.log({videos});
	return (
		<PageLayout title="Base Ecosystem">
			<div className="grid md:grid-cols-2 gap-6 *:rounded-lg *:p-2 *:bg-slate-900">
				{videos.map((video, key) => (
					<VideoCard key={key} title={video.title} url={video.url} />
				))}
			</div>
		</PageLayout>
	);
}
