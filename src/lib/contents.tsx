import React, { useState } from "react";
import { Play, Pause, Download, Image as ImageIcon } from "lucide-react";
import AudioComponent from "@/components/dashboard/AudioComponent";
import { PDFDownloader } from "@/components/dashboard/PDFDownloader";

const lesson1231: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 1: What is Blockchain?
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							The Digital Ledger 📒💻
						</h2>
						<p>
							Blockchain is a revolutionary digital system for
							recording information. Imagine a giant, shared
							spreadsheet that everyone can see but no one can
							easily change. This spreadsheet is updated
							simultaneously across thousands of computers,
							ensuring that{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								the information it contains is difficult or
								impossible to change, hack, or cheat
							</i>
							. It's like a digital ledger that's maintained by a
							global network of collaborators, rather than a
							single authority.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Digital ledger concept'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Blocks and Chains ⛓️
						</h2>
						<p>
							The name "blockchain" comes from how this technology
							stores data. Information is grouped into "blocks,"
							and these blocks are linked together in a specific
							order, forming a "chain." Each new block of
							information is added to the end of this chain,
							creating a timeline of data.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								What makes blockchain special is that it's
								decentralized, meaning no single person or group
								has control over it
							</i>
							. Instead, all users collectively maintain and
							verify the records.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Blockchain concept'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Beyond Cryptocurrency 🌐
						</h2>
						<p>
							While blockchain is the foundation for
							cryptocurrencies like Bitcoin, its potential reaches
							far beyond digital money. This technology has the
							power to revolutionize many industries and
							processes. From supply chain management to voting
							systems, healthcare records to digital identity
							verification,{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								blockchain's secure and transparent nature opens
								up a world of possibilities for innovation and
								improved efficiency
							</i>
							. As we continue to explore and develop blockchain
							technology, we're likely to see even more creative
							and impactful applications emerge.
						</p>
					</div>

					{/* Image 3 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Blockchain applications'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 🗒️
						</h2>
						<p>
							Blockchain is a digital system for recording
							information in a way that makes it difficult or
							impossible to change, hack, or cheat the system.
							It's a type of shared database that stores
							information in blocks that are chained together.
							What makes blockchain special is that it's
							decentralized, meaning no single person or group has
							control over it. Instead, all users collectively
							keep the records. This technology is the foundation
							for cryptocurrencies and has potential uses in many
							other areas.
						</p>
					</div>
				</div>
				<section className='col-span-1 space-y-6 '>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => {
									setVideoOn(true);
								}}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Blockchain Basics Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='space-y-6'>
								<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
									<div className='absolute inset-0 pointer-events-none'></div>
									<iframe
										src='https://www.youtube.com/embed/2m0azblg-To?si=m9P7QVP1JugxrSa6'
										title='Blockchain Basics'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										className='w-full h-full'></iframe>
								</div>
							</div>
						)}
					</div>

					{/* Audio section */}
					<AudioComponent audioFileLocation='/Audios/blockchain_fundamentals.mp3' />
			

					{/* Slides section */}
					<PDFDownloader pdfFileLocation='/pdfs/blockchain_fundamentals.pdf' />
					
				</section>
			</div>
		</div>
	);
};

const lesson1232: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState<boolean>(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 2: How Blockchain Works
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Building Blocks of Data 🧱
						</h2>
						<p>
							Imagine you're building a tower with Lego blocks,
							but each block represents a group of transactions or
							data. In blockchain, these groups are called
							"blocks".{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								When new information needs to be added, it's put
								into a new block. Once this block is filled with
								data, it's connected to the previous block,
								creating a timeline of information
							</i>
							. This process continues, forming a chain of blocks
							- hence the name "blockchain".
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/Notebook-pana.svg'
							alt='Course visual 1'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							The Chain Connection 🔗
						</h2>
						<p>
							What makes blockchain unique is how these blocks are
							connected. Each block contains a special code called
							a hash, which is like a digital fingerprint. This
							hash is partly based on the information in the
							previous block.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								This structure, combined with complex
								mathematics and computer science principles,
								makes it very difficult to alter information
								once it's been recorded
							</i>
							. If someone tries to change data in one block, it
							would change that block's hash, breaking the chain
							and making the tampering obvious.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/Safe-bro.svg'
							alt='Course visual 2'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Decentralized Verification 🌐
						</h2>
						<p>
							In a traditional system, a central authority (like a
							bank) would verify transactions. Blockchain works
							differently. Instead of one central authority, many
							computers (called nodes) on the network work
							together to verify new information.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								When a new block is created, it's sent to all
								the nodes in the network. These nodes check the
								block to make sure it's valid before adding it
								to their copy of the blockchain
							</i>
							. This decentralized verification process ensures
							the integrity and security of the data without
							relying on a single point of control.
						</p>
					</div>
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/decent.svg'
							alt='Course visual 1'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 🗒️
						</h2>
						<p>
							Blockchain functions by grouping data into blocks
							and linking these blocks together in a specific
							order. When new information needs to be added, it's
							put into a new block. Once this block is filled with
							data, it's chained onto the previous block, creating
							a timeline of data. Each block contains a unique
							code that connects it to the previous block, forming
							an unbroken chain. This structure, combined with
							complex mathematics and computer science principles,
							makes it very difficult to alter information once
							it's been recorded, ensuring the data's integrity
							and security.
						</p>
					</div>
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/decent.svg'
							alt='Course visual 1'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
				<section className='col-span-1 space-y-6 '>
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => {
									setVideoOn(true);
								}}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>{" "}
								<p className='text-indigo-800 font-semibold'>
									Watch How Blockchain Works
								</p>
							</div>
						)}

						{videoOn && (
							<div className='space-y-6'>
								<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
									<div className='absolute inset-0 pointer-events-none'></div>
									<iframe
										src='https://www.youtube.com/embed/kHybf1aC-jE?si=Q-EnJLlgG274TI1H'
										title='How Blockchain Works by Whiteboard Crypto'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										className='w-full h-full'></iframe>
								</div>
							</div>
						)}
					</div>

					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1233: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 3: Types of Blockchain
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Public Blockchain */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Public Blockchain 🌍
						</h2>
						<p>
							A public blockchain is open to everyone. Think of it
							like the internet—you can access it without
							restrictions. Anyone can participate in the network,
							validate transactions, or create decentralized apps.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Bitcoin and Ethereum are examples of public
								blockchains
							</i>
							, where transparency and decentralization are at the
							core.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Public blockchain concept'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Private Blockchain */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Private Blockchain 🔒
						</h2>
						<p>
							Unlike public blockchains, private blockchains are
							restricted. Only specific users have access to the
							system, making them ideal for businesses that
							require more control.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								A private blockchain ensures higher transaction
								speed but lacks the open, decentralized nature
								of public blockchains
							</i>
							.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Private blockchain concept'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Hybrid Blockchain */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Hybrid Blockchain ⚙️
						</h2>
						<p>
							A hybrid blockchain combines elements of both public
							and private blockchains. For instance, a company
							might use a private blockchain for internal tasks
							while interacting with a public blockchain for
							verification.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								This approach offers flexibility and can protect
								sensitive information while benefiting from
								decentralized verification
							</i>
							.
						</p>
					</div>

					{/* Image 3 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Hybrid blockchain concept'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 🗒️
						</h2>
						<p>
							Public blockchains are open to all, private
							blockchains restrict access, and hybrid blockchains
							combine elements of both.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Each type serves different purposes depending on
								the need for transparency, control, and security
							</i>
							.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => {
									setVideoOn(true);
								}}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Blockchain Types Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/RGeNWEKpjQA?si=X9RC4V20pVVHaC3J'
									title='Blockchain Types Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1234: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 4: Consensus Mechanisms 🫱🏾‍🫲🏾
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Proof of Work */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							What are they? Why do we need them ?
						</h2>
						<p>
							In simple terms, a consensus mechanism is a method
							used by blockchain networks{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								to agree on which transactions are valid and
								should be added to the blockchain
							</i>
							. Blockchains are decentralized, meaning there isn't
							a central authority like a bank to verify
							transactions. Instead, a group of participants
							(often called nodes) must come to a common
							agreement, or "consensus," about the state of the
							blockchain. This is crucial for ensuring that the
							blockchain remains secure, accurate, and resistant
							to fraud. Without consensus mechanisms, there would
							be no way for everyone to trust the information on
							the blockchain.
						</p>
					</div>
					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Proof of Work concept'
							className='w-full h-full object-cover'
						/>
					</div>
					{/* Proof of Work */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Proof of Work (PoW) 🛠️
						</h2>
						<p>
							Proof of Work is one of the earliest and most widely
							used consensus mechanisms,{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								particularly known for securing the Bitcoin
								network
							</i>
							. In PoW, participants (called miners) compete to
							solve complex mathematical puzzles, similar to a
							race to solve a very difficult riddle. Imagine a
							classroom where the teacher writes a very hard math
							problem on the board, and the first student who
							solves it correctly gets a reward, like a piece of
							candy. In this scenario, the math problem represents
							the puzzle that miners solve, and the candy is the
							reward they get for solving it first. , where the
							security of the network comes from the computational
							power invested.
						</p>
					</div>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<p>
							However, solving these puzzles requires a lot of
							computer power, just like it would take a lot of
							time and energy for students to solve extremely
							tough math problems repeatedly. This
							energy-intensive process is what makes PoW secure
							because{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								it takes significant effort to solve the
								puzzles,
							</i>{" "}
							making it difficult for anyone to tamper with the
							blockchain.
						</p>
					</div>
					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Proof of Work concept'
							className='w-full h-full object-cover'
						/>
					</div>
					{/* Proof of Stake */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Proof of Stake (PoS) 🎟️
						</h2>
						<p>
							Proof of Stake works differently from PoW by
							selecting participants to validate transactions
							<i className='font-extralight text-[#8ea9e9]'>
								based on the amount of cryptocurrency they hold,
								or "stake."
							</i>
							Think of it like a lottery where the more tickets
							you have, the higher your chances of being chosen to
							win. In PoS, owning more cryptocurrency (more
							"tickets") increases the chances of being selected
							to validate the next block of transactions. .
						</p>
					</div>
					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Proof of Stake concept'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<p>
							Instead of requiring participants to solve puzzles
							like in PoW, PoS allows participants to "stake"
							their cryptocurrency to help secure the network. If
							a participant is chosen to validate transactions,
							they receive a reward, similar to how the winner of
							a raffle might get a prize. Because PoS doesn't
							involve solving complex problems, it uses much less
							energy than PoW, making it more environmentally
							friendly.
						</p>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 🗒️
						</h2>
						<p>
							Consensus mechanisms secure blockchains without
							central authorities. PoW relies on solving puzzles,
							consuming more energy, while PoS chooses validators
							based on their stake, offering a more eco-friendly
							solution. Both aim to keep the blockchain safe and
							reliable.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => {
									setVideoOn(true);
								}}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Consensus Mechanisms Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/3QCykHU89To?si=mfVyE2_5knyh7z0K'
									title='Blockchain Types Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1235: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 5: Smart Contracts 📜
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Smart Contracts */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							What Are Smart Contracts? 📜
						</h2>
						<p>
							Smart contracts are self-executing programs on a
							blockchain that automatically carry out tasks when
							specific conditions are met. Think of them as
							digital "if-then" agreements that run without
							needing a middleman, like a lawyer or bank. They
							help automate processes, save time, and reduce the
							need for third-party services Smart contracts are
							like regular contracts but written in code. Imagine
							renting a car: you pay the required amount, and the
							car unlocks automatically—no paperwork needed!.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Smart Contract concept'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							How do they work?⚙️
						</h2>
						<p>
							Smart contracts are like vending machines. If you
							put in the right amount of money (condition), the
							machine automatically gives you the snack (result).
							There’s no need for a shopkeeper to intervene.
							Similarly, on a blockchain, if the terms set in a
							smart contract are met, it will automatically
							execute the agreed actions, such as transferring
							ownership or releasing payment.
						</p>
					</div>
					{/* Use Cases */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Smart Contract Use Cases 💡
						</h2>
						<p>
							Smart contracts are used in many areas, like
							finance, insurance, and even real estate.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								They reduce the need for middlemen
							</i>{" "}
							because everything is executed on the blockchain
							automatically.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64'>
						<img
							src='/api/placeholder/400/320'
							alt='Smart Contract use cases'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 🗒️
						</h2>
						<p>
							Smart contracts are self-executing contracts with
							the terms written directly into code. They simplify
							processes and remove the need for intermediaries
							.While offering benefits like efficiency and lower
							costs, they must be coded carefully to avoid
							potential risks.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => setVideoOn(true)}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Smart Contracts Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/KO9mdk8CSpo?si=G28ulweCn3-EKu6J'
									title='Smart Contracts Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1236: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>Lesson 6: Tokens 💰</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							What Are Tokens? 🪙
						</h2>
						<p>
							Tokens are digital assets that can represent
							anything from money to property. They live on the
							blockchain and can be used in different ways, like
							for transactions, voting in decentralized
							organizations, or even as collectibles like NFTs.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Think of tokens like digital coupons that you
								can use in various apps
							</i>
							.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Digital tokens reLesson'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Utility Tokens vs. Security Tokens 🛠️🔒
						</h2>
						<p>
							There are different types of tokens, but two common
							ones are utility tokens and security tokens. Utility
							tokens give you access to products or services, like
							using arcade tokens for games . Security tokens, on
							the other hand, are more like investments, where
							their value is tied to an asset or the performance
							of a company.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Utility vs. security tokens'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							NFTs: Non-Fungible Tokens 🎨
						</h2>
						<p>
							NFTs are special tokens that represent ownership of
							unique digital items, like art or music. Unlike
							regular tokens,{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								NFTs are non-fungible, meaning each one is
								unique and cannot be exchanged on a one-to-one
								basis like money
							</i>
							.
						</p>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 📝
						</h2>
						<p>
							Tokens are key components of the blockchain, serving
							as digital assets for transactions, services, and
							collectibles. Whether you're using utility tokens to
							access services or NFTs to collect digital art, they
							open up new ways to interact with digital assets
							securely.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => setVideoOn(true)}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Tokens Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/422HORNUfkU?si=AwCr_T7KhvO9mIQO'
									title='Tokens Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1237: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 7: Decentralized Finance (DeFi) 💸
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							What is DeFi? 🏦💡
						</h2>
						<p>
							DeFi stands for Decentralized Finance. It's a
							financial system built on blockchain technology that
							allows people to borrow, lend, and trade without
							needing traditional banks.
							<i className='font-extralight text-[#8ea9e9]'>
								{" "}
								Imagine being able to lend your money to others
								directly and earn interest, just like a bank
								does, but without all the fees!
							</i>
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='DeFi concept'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Earning with DeFi 🌱💰
						</h2>
						<p>
							One popular way to earn in DeFi is through{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								liquidity pools
							</i>
							. When you add your cryptocurrency to a pool, others
							can borrow it, and you earn a share of the
							transaction fees.
							<i className='font-extralight text-[#8ea9e9]'>
								{" "}
								It’s like putting your money in a shared piggy
								bank and getting paid whenever someone takes a
								coin out!
							</i>
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Liquidity pools in DeFi'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							DeFi Platforms 🚀🔗
						</h2>
						<p>
							There are several popular DeFi platforms like{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Uniswap
							</i>{" "}
							for trading and{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Aave
							</i>{" "}
							for lending.
							<i className='font-extralight text-[#8ea9e9]'>
								{" "}
								Using these platforms, anyone can access
								financial services without a bank account—just a
								crypto wallet!
							</i>
						</p>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 📝
						</h2>
						<p>
							DeFi is revolutionizing finance by providing
							decentralized, accessible, and transparent financial
							services. Whether you’re lending, borrowing, or
							trading, DeFi allows anyone with an internet
							connection to participate, making finance fairer and
							more inclusive. 🌍💪
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => setVideoOn(true)}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch DeFi Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/17QRFlml4pA?si=sQrNkoh-2kMYefnu'
									title='DeFi Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1238: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 8: Uses of Blockchain 🌍🔗
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Supply Chain Management 📦🚚
						</h2>
						<p>
							Blockchain helps track products from their source to
							the store shelf. Imagine buying coffee and knowing
							every step it took to get to your cup.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								It makes the process transparent and secure,
								ensuring no tampering along the way
							</i>
							.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Supply chain tracking concept'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Digital Payments and Money Transfers 💸
						</h2>
						<p>
							Blockchain can be used to send money directly
							between people without needing a bank or payment
							service like PayPal. Imagine paying a friend for
							lunch by simply transferring digital coins to them,
							like handing over cash, but digitally. Transactions
							happen quickly, often within minutes, and can be
							done internationally without paying high fees.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Supply chain tracking concept'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>
					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Healthcare Records 🏥📂
						</h2>
						<p>
							Blockchain can secure healthcare records so that
							patients can access their information anywhere,
							anytime.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								It ensures that sensitive information is only
								shared with authorized people, while also
								reducing paperwork
							</i>
							.
						</p>
					</div>

					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Healthcare on blockchain'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Voting Systems 🗳️📊
						</h2>
						<p>
							Blockchain offers a transparent way to run
							elections, making results tamper-proof.{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								Every vote is securely recorded, ensuring that
								voting is fair and transparent
							</i>
							. This can help prevent fraud and increase public
							trust in election outcomes.
						</p>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 📝
						</h2>
						<p>
							Blockchain has wide-ranging applications beyond
							cryptocurrency. From supply chain management and
							healthcare records to voting systems, its
							transparency and security are valuable in many
							sectors. As we move forward, more industries will
							find ways to adopt blockchain.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => setVideoOn(true)}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Blockchain Uses Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/znwOhOtm6go?si=Vx6M3k2fGEAGXnbj'
									title='Blockchain Uses Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

const lesson1239: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState(false);

	return (
		<div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>
				Lesson 9: Why Do We Need Blockchain? 🤔
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px]'>
					{/* Text Content 1 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Trust Without Intermediaries 🤝
						</h2>
						<p>
							One of the biggest reasons we need blockchain is{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								trust
							</i>
							. In traditional systems, trust is usually built
							through intermediaries like banks or governments.
							But with blockchain, we can create trust in a
							decentralized way without needing a middleman. This
							is great for things like{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								peer-to-peer transactions, transparent voting
								systems, or secure data sharing
							</i>
							.
						</p>
					</div>

					{/* Image 1 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Decentralized trust concept'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					{/* Text Content 2 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Security and Transparency 🔒👀
						</h2>
						<p>
							Blockchain provides a level of security and
							transparency that other systems often lack. Once
							information is recorded,{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								it cannot be easily altered or erased
							</i>
							. This means people can trust the system without
							worrying about hidden changes or corruption.
						</p>
					</div>
					{/* Image 2 */}
					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/api/placeholder/400/320'
							alt='Security and transparency'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content 3 */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Removing Boundaries 🌍✈️
						</h2>
						<p>
							Blockchain breaks down barriers. Whether you're
							sending money or accessing records,{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								you don't need to worry about country borders,
								business hours, or regulations
							</i>
							. This makes global transactions easier and faster,
							without the high fees of traditional systems.
						</p>
					</div>

					{/* Summary */}
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Summary 📝
						</h2>
						<p>
							Blockchain eliminates the need for intermediaries,
							enhances security, and provides transparency. It
							enables global transactions, reducing boundaries
							while building trust. In short, it's a revolutionary
							tool for creating a secure and transparent digital
							world.
						</p>
					</div>
				</div>

				<section className='col-span-1 space-y-6'>
					{/* Video section */}
					<div>
						{!videoOn && (
							<div
								className='bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64'
								onClick={() => setVideoOn(true)}>
								<Play
									size={48}
									className='text-indigo-600 mb-4'
								/>
								<p className='text-indigo-800 font-semibold'>
									Watch Why Blockchain Video
								</p>
							</div>
						)}

						{videoOn && (
							<div className='relative bg-gray-800 rounded-lg overflow-hidden h-64'>
								<iframe
									src='https://www.youtube.com/embed/-Hbsq2FAlXU?si=obJ79DcUwyBD7uNJ'
									title='Why Blockchain Video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-full'></iframe>
							</div>
						)}
					</div>

					{/* Audio section */}
					<div className='bg-indigo-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
							Audio Lesson
						</h3>
						<div className='flex items-center justify-between mb-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors'>
								{isPlaying ? (
									<Pause size={24} />
								) : (
									<Play size={24} />
								)}
							</button>
							<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
								<div className='w-1/3 h-full bg-indigo-500 rounded-full'></div>
							</div>
							<span className='text-indigo-800'>2:30 / 7:15</span>
						</div>
						<button className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors'>
							<Download
								size={20}
								className='mr-2'
							/>
							Download Audio
						</button>
					</div>

					{/* Slides section */}
					<div className='bg-yellow-100 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4 text-yellow-800'>
							Lesson Slides
						</h3>
						<div className='flex justify-between items-center flex-col xl:flex-row'>
							<ImageIcon
								size={40}
								className='text-yellow-600'
							/>
							<button className='flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors'>
								<Download
									size={20}
									className='mr-2'
								/>
								Download PDF
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export const contents = {
	1: lesson1231,
	2: lesson1232,
	3: lesson1233,
	4: lesson1234,
	5: lesson1235,
	6: lesson1236,
	7: lesson1237,
	8: lesson1238,
	9: lesson1239,
};
