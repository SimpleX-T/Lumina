import { PrismaClient } from "@prisma/client";
//these imports are the functional components of the content files, already formatted. I dont know if you can seed them this way

const prisma = new PrismaClient();

//these are the quiz questions for the three courses
const blockchainFirstQuestions = [
	{
		question: "What is a blockchain often described as?",
		options: [
			"A type of database",
			"A physical ledger",
			"A file storage system",
			"An encryption tool",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question:
			"In the analogy of a shared notebook, what does the blockchain represent?",
		options: [
			"A collection of digital files",
			"A private chat group",
			"A shared record of information",
			"A data center",
		],
		answerIndex: 2,
		score: 2,
	},
	{
		question: "How are new blocks added to a blockchain?",
		options: [
			"By validating transactions and solving a complex problem",
			"By copying data from one computer to another",
			"By downloading software updates",
			"By writing data directly to a server",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question: "What does it mean for a blockchain to be immutable?",
		options: [
			"Data cannot be changed once added",
			"Data can only be stored for a limited time",
			"Data is kept in a temporary location",
			"Data can be modified by multiple users",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question: "Which type of blockchain is open to everyone?",
		options: [
			"Private blockchain",
			"Hybrid blockchain",
			"Public blockchain",
			"Federated blockchain",
		],
		answerIndex: 2,
		score: 2,
	},
	{
		question: "What is the main characteristic of a private blockchain?",
		options: [
			"It allows anyone to validate transactions",
			"Only selected participants can access it",
			"It combines features of public and private blockchains",
			"It is completely offline",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How does a hybrid blockchain differ from other types?",
		options: [
			"It only allows for anonymous transactions",
			"It is used exclusively for cryptocurrencies",
			"It integrates both public and private features",
			"It requires high energy consumption",
		],
		answerIndex: 2,
		score: 2,
	},
	{
		question: "What role does a 'node' play in a blockchain network?",
		options: [
			"It stores and validates transactions",
			"It creates new types of cryptocurrencies",
			"It encrypts the entire blockchain",
			"It tracks the speed of transactions",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question: "Why is blockchain considered transparent?",
		options: [
			"All participants can see the data stored in the blockchain",
			"It uses clear text instead of encrypted data",
			"The data can be easily deleted",
			"Only selected users can access the information",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question:
			"Which of the following best describes mining in a blockchain?",
		options: [
			"Sending cryptocurrency between wallets",
			"Adding new transactions to a block and securing the network",
			"Backing up the blockchain data",
			"Developing new applications on the blockchain",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How does decentralization benefit blockchain security?",
		options: [
			"It speeds up the transaction process",
			"It prevents a single point of failure",
			"It makes the blockchain private",
			"It reduces the number of transactions",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"Which blockchain type is ideal for companies needing privacy but still wanting some public transparency?",
		options: [
			"Private blockchain",
			"Public blockchain",
			"Hybrid blockchain",
			"Consortium blockchain",
		],
		answerIndex: 2,
		score: 2,
	},
];

const blockchainMidQuestions = [
	{
		question:
			"What is the purpose of a consensus mechanism in a blockchain?",
		options: [
			"To control user access",
			"To agree on the state of the blockchain",
			"To manage the blockchain's website",
			"To change the blockchain's design",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"Which consensus mechanism involves solving complex puzzles to add a block?",
		options: [
			"Proof of Stake",
			"Proof of Work",
			"Delegated Proof of Stake",
			"Proof of Authority",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "What is a token on a blockchain?",
		options: [
			"A physical coin used in transactions",
			"A digital representation of an asset or utility",
			"A password for accessing the blockchain",
			"A file stored on a local computer",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How does Proof of Stake differ from Proof of Work?",
		options: [
			"It requires more electricity",
			"It selects validators based on the amount of cryptocurrency they hold",
			"It is used only for public blockchains",
			"It always requires solving mathematical puzzles",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "What can smart contracts be used for?",
		options: [
			"Executing code automatically when certain conditions are met",
			"Designing user interfaces",
			"Mining new blocks",
			"Creating physical agreements",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question:
			"What role do governance tokens play in a blockchain ecosystem?",
		options: [
			"They enable users to vote on decisions",
			"They are used only for transactions",
			"They generate blocks faster",
			"They create new cryptocurrencies",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question:
			"Why are consensus mechanisms important for blockchain security?",
		options: [
			"They encrypt all user data",
			"They prevent unauthorized changes to the blockchain",
			"They increase transaction speed",
			"They eliminate the need for encryption",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "Which of the following is an example of a utility token?",
		options: [
			"A token used to vote on network upgrades",
			"A token that gives access to specific features of a platform",
			"A token that represents ownership of a company",
			"A token that stabilizes in value over time",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"What happens when the conditions in a smart contract are not met?",
		options: [
			"The smart contract automatically executes",
			"The contract remains inactive",
			"The blockchain is rolled back",
			"The transaction fee is refunded",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How does Delegated Proof of Stake (DPoS) work?",
		options: [
			"Users compete to solve puzzles",
			"Users vote for delegates who validate blocks",
			"It randomly selects validators",
			"It requires a license to participate",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "What is one advantage of using smart contracts?",
		options: [
			"They reduce the need for intermediaries",
			"They guarantee a high return on investments",
			"They always require a lawyer's approval",
			"They work only on private blockchains",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question:
			"What type of token is typically used to represent voting power in a blockchain project?",
		options: [
			"Utility token",
			"Governance token",
			"Stablecoin",
			"Security token",
		],
		answerIndex: 1,
		score: 2,
	},
];

const blockchainEndQuestions = [
	{
		question:
			"What does DeFi enable users to do without traditional banks?",
		options: [
			"Create social media accounts",
			"Access financial services like lending and borrowing",
			"Write legal contracts",
			"Store personal information",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"Which of the following is a popular use case for blockchain technology?",
		options: [
			"Tracking supply chains",
			"Managing household chores",
			"Editing documents online",
			"Hosting video games",
		],
		answerIndex: 0,
		score: 2,
	},
	{
		question: "How does blockchain technology improve security?",
		options: [
			"By using passwords for all users",
			"By storing data across a decentralized network",
			"By limiting access to a single server",
			"By allowing only government agencies to manage it",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "Why is DeFi considered revolutionary?",
		options: [
			"It uses only cash for transactions",
			"It eliminates the need for middlemen in financial services",
			"It has the fastest internet speeds",
			"It supports only one cryptocurrency",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How can blockchain be used in healthcare?",
		options: [
			"To design hospital buildings",
			"To store and share patient records securely",
			"To replace doctors",
			"To perform surgeries",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "Why is transparency important in blockchain technology?",
		options: [
			"It allows anyone to alter the data",
			"It helps users see and verify transaction histories",
			"It makes blockchains private",
			"It reduces the need for encryption",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"What is one major advantage of using blockchain for supply chain management?",
		options: [
			"It lowers shipping costs automatically",
			"It allows for real-time tracking of goods",
			"It generates sales reports",
			"It creates new products",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "How does DeFi help increase financial inclusion?",
		options: [
			"By only serving large businesses",
			"By providing financial services to people without access to banks",
			"By limiting transactions to certain countries",
			"By increasing the cost of transactions",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question: "Why is blockchain considered resistant to censorship?",
		options: [
			"It is controlled by a central authority",
			"Its data can be modified by anyone at any time",
			"Its records are spread across many nodes, making it hard to alter",
			"It requires a special license to access",
		],
		answerIndex: 2,
		score: 2,
	},
	{
		question:
			"Which sector can benefit from using blockchain for secure voting systems?",
		options: ["Healthcare", "Education", "Government", "Entertainment"],
		answerIndex: 2,
		score: 2,
	},
	{
		question: "How does using blockchain in finance reduce costs?",
		options: [
			"By hiring more employees",
			"By automating processes and reducing intermediaries",
			"By increasing the number of bank branches",
			"By charging higher fees for every transaction",
		],
		answerIndex: 1,
		score: 2,
	},
	{
		question:
			"What is one reason why blockchain is important for digital identity verification?",
		options: [
			"It can create fake identities easily",
			"It provides a secure and tamper-proof way to store identity data",
			"It requires no user verification",
			"It only works for large companies",
		],
		answerIndex: 1,
		score: 2,
	},
];
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
		url: "https://www.youtube.com/embed/Ffus9EDw5y8?si=vYqKC49E50H4Aysg",
		title: "Base Year 2 Vision",
	},
];

const courses = [
	{
		id: 123,
		title: "BLOCKCHAIN FUNDAMENTALS",
		description:
			"This course introduces you to the core concepts behind blockchain technology. You'll learn how blockchains work, what makes them secure, and why decentralization is a key feature of this revolutionary technology. By the end, you'll understand how blockchains power cryptocurrencies and many other applications.",
		image: "/Images/fundamentals.jpg",
		duration: 30,
		lessons: [
			{
				id: 1,
				title: "What is Blockchain 🤷🏾‍♂️?",
				duration: 300000,
				content: "lesson1231",
			},
			{
				id: 2,
				title: "How do Blockchains Work?",
				duration: 300000,
				content: "lesson1232",
			},
			{
				id: 3,
				title: "Types of Blockchain",
				duration: 300000,
				content: "lesson1233",
				quiz: blockchainFirstQuestions,
			},
			{
				id: 4,
				title: "Consensus Mechanisms",
				duration: 300000,
				content: "lesson1234",
			},
			{
				id: 5,
				title: "Smart Contracts",
				duration: 300000,
				content: "lesson1235",
			},
			{
				id: 6,
				title: "Tokens 💰",
				duration: 300000,
				content: "lesson1236",
				quiz: blockchainMidQuestions,
			},
			{
				id: 7,
				title: "Decentralized Finance (DeFi) 💸",
				duration: 300000,
				content: "lesson1237",
			},
			{
				id: 8,
				title: "Uses of Blockchain 🌍🔗",
				duration: 300000,
				content: "lesson1238",
			},
			{
				id: 9,
				title: "Why Do We Need Blockchain? 🤔",
				duration: 300000,
				content: "lesson1239",
				quiz: blockchainEndQuestions,
			},
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
	},
	// 	{
	// 		id: 124,
	// 		title: "WALLETS",

	// 		description:
	// 			"In this course, you'll explore the essential role of crypto wallets in managing and securing digital assets. You'll learn how to set up and use both hot (online) and cold (offline) wallets, understand the importance of private keys, and practice sending and receiving cryptocurrency. This course equips you with the skills to protect your assets and engage with blockchain networks safely.",
	// 		image: "/Images/wallets.jpg",
	// 		duration: 30,
	// 		lessons: [
	// 			{
	// 				id: 1,
	// 				duration: 5,
	// 				title: "What are Crypto Wallets 🗃️?",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 2,
	// 				duration: 5,
	// 				title: "Types of Wallets?",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 3,
	// 				duration: 5,
	// 				title: "How do Wallets Work?",
	// 				content: introA,
	// 				quiz: walletsMidQuestions,
	// 			},
	// 			{
	// 				id: 4,
	// 				duration: 5,
	// 				title: "Keeping Your Wallet Safe",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 5,
	// 				title: "Choosing the Right Wallet",
	// 				duration: 5,
	// 				content: introA,
	// 				quiz: walletsMidQuestions,
	// 			},
	// 		],
	// 		resources: {
	// 			audio: true,
	// 			video: true,
	// 			text: true,
	// 			visuals: true,
	// 		},
	// 	},
	// 	{
	// 		id: 125,
	// 		title: "CRYPTOCURRENCIES",
	// 		description:
	// 			"This course dives into the world of digital currencies, starting with an introduction to Bitcoin and Ethereum. You’ll learn how cryptocurrency transactions work, how new coins are created through mining or staking, and the risks involved in the space. The course helps you navigate the growing world of crypto, providing insights into the opportunities and challenges it presents",
	// 		image: "/Images/crypto.jpg",
	// 		duration: 30,
	// 		lessons: [
	// 			{
	// 				id: 1,
	// 				duration: 5,
	// 				title: "What are Cryptocurrencies 🪙?",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 2,
	// 				duration: 5,
	// 				title: "How Does It Work?",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 3,
	// 				duration: 5,
	// 				title: "Types of Cryptocurrencies",
	// 				content: introA,
	// 				quiz: cryptoMidQuestions,
	// 			},
	// 			{
	// 				id: 4,
	// 				duration: 5,
	// 				title: "Why Use Cryptocurrencies?",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 5,
	// 				duration: 5,
	// 				title: "Risks and Challenges",
	// 				content: introA,
	// 			},
	// 			{
	// 				id: 6,
	// 				duration: 5,
	// 				title: "Getting Started 🚀",
	// 				content: introA,
	// 				quiz: cryptoEndQuestions,
	// 			},
	// 		],
	// 		resources: {
	// 			audio: true,
	// 			video: true,
	// 			text: true,
	// 			visuals: true,
	// 		},
	// 	},
];

async function main() {
	videos.forEach(async (video) => {
		await prisma.baseVideo.upsert({
			where: { title: video.title },
			update: {},
			create: { ...video },
		});
	});

	courses.forEach(async (course) => {
		const newCourse = await prisma.course.create({
			data: {
				title: course.title,
				description: course.description,
				duration: course.duration,
				image: course.image,
			},
		});

		await prisma.resource.create({
			data: {
				audio: course.resources.audio,
				video: course.resources.video,
				text: course.resources.text,
				visuals: course.resources.visuals,
				courseId: newCourse.id,
			},
		});

		course.lessons.forEach(async (lesson) => {
			await prisma.lesson.create({
				data: {
					title: lesson.title,
					content: lesson.content as string,
					courseId: newCourse.id,
				},
			});
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
