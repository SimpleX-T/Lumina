import { Download, ImageIcon } from "lucide-react";

export function PDFDownloader({
	pdfFileLocation,
}: {
	pdfFileLocation: string;
}) {
	function handleDownload() {
		window.open(pdfFileLocation, "_blank");
	}

	return (
		<div className='bg-yellow-100 rounded-lg p-6'>
			<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
				Lesson Slides
			</h3>
			<div className='flex justify-between items-center flex-col xl:flex-row'>
				<ImageIcon
					size={40}
					className='text-yellow-600'
				/>
				<button
					onClick={handleDownload}
					className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
					<Download
						size={20}
						className='mr-2'
					/>
					Download PDF
				</button>
			</div>
		</div>
	);
}
