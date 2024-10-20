import {PrismaClient} from "@prisma/client";
//these imports are the functional components of the content files, already formatted. I dont know if you can seed them this way
import introA from "./course/intro1";
import introB from "./course/intro2";
import introC from "./course/intro3";
import introD from "./course/intro4";

const prisma = new PrismaClient();

//these are the quiz questions for the three courses
const blockchainMidQuestions = [
	{
		question:
			"What is a blockchain primarily compared to in our explanation?",
		options: [
			"A digital wallet",
			"A shared notebook",
			"A cryptocurrency",
			"A computer program",
		],
		answerIndex: 1,
		score: 10,
	},
	{
		question:
			"In the Pokemon card trading analogy, what does writing a trade in the notebook represent?",
		options: [
			"Creating a new blockchain",
			"Mining a block",
			"Adding a transaction to the blockchain",
			"Buying cryptocurrency",
		],
		answerIndex: 2,
		score: 20,
	},
	{
		question: "Why is blockchain called 'decentralized'?",
		options: [
			"Because it's only used for digital currencies",
			"Because it's a new technology",
			"Because no single person or entity controls it",
			"Because it's very fast",
		],
		answerIndex: 2,
		score: 30,
	},
];
const blockchainEndQuestions = [
	{
		question:
			"In the blockchain process, what does 'solving a tricky math puzzle' represent?",
		options: [
			"Creating a new cryptocurrency",
			"Mining",
			"Buying blockchain tokens",
			"Hacking the system",
		],
		answerIndex: 1,
		score: 30,
	},
	{
		question:
			"How does blockchain ensure the integrity of past transactions?",
		options: [
			"By using very strong passwords",
			"By storing data in a secure cloud",
			"By linking each block to the previous one with a unique code",
			"By having a central authority verify each transaction",
		],
		answerIndex: 2,
		score: 40,
	},
	{
		question:
			"Which of the following is NOT mentioned as a potential use for blockchain technology?",
		options: [
			"Digital Money",
			"Voting Systems",
			"Supply Chain Tracking",
			"Social Media Platforms",
		],
		answerIndex: 3,
		score: 50,
	},
];
// Mid-lesson questions
const cryptoMidQuestions = [
	{
		question: "What is cryptocurrency compared to in our explanation?",
		options: [
			"Digital gold coins in a video game",
			"Paper money",
			"Bank deposits",
			"Stock certificates",
		],
		answerIndex: 0,
		score: 10,
	},
	{
		question: "What does the 'crypto' in cryptocurrency refer to?",
		options: ["Digital", "Secret", "Cryptography", "Decentralized"],
		answerIndex: 2,
		score: 20,
	},
	{
		question: "In the context of cryptocurrencies, what is 'mining'?",
		options: [
			"Digging for digital coins",
			"Creating new social media accounts",
			"A process of solving puzzles to create new coins",
			"Buying cryptocurrencies",
		],
		answerIndex: 2,
		score: 30,
	},
];

// End-of-topic questions
const cryptoEndQuestions = [
	{
		question: "Which cryptocurrency is often called 'digital gold'?",
		options: ["Ethereum", "Dogecoin", "Bitcoin", "Litecoin"],
		answerIndex: 2,
		score: 30,
	},
	{
		question: "What is a key feature of stablecoins?",
		options: [
			"They're always increasing in value",
			"They try to maintain a stable value",
			"They're only used for mining",
			"They're controlled by central banks",
		],
		answerIndex: 1,
		score: 40,
	},
	{
		question:
			"Which of the following is NOT mentioned as a risk or challenge of cryptocurrencies?",
		options: [
			"Volatility",
			"Security concerns",
			"Regulation uncertainty",
			"Limited supply",
		],
		answerIndex: 3,
		score: 50,
	},
];
// Mid-lesson questions
const walletsMidQuestions = [
	{
		question:
			"What is a cryptocurrency wallet compared to in our explanation?",
		options: [
			"A bank account",
			"A digital piggy bank",
			"A physical wallet",
			"A smartphone app",
		],
		answerIndex: 1,
		score: 10,
	},
	{
		question: "What does a cryptocurrency wallet actually store?",
		options: [
			"Digital coins",
			"Passwords",
			"Special keys",
			"Blockchain data",
		],
		answerIndex: 2,
		score: 20,
	},
	{
		question:
			"Which type of wallet is described as being like money in your pocket?",
		options: [
			"Cold wallet",
			"Hardware wallet",
			"Hot wallet",
			"Paper wallet",
		],
		answerIndex: 2,
		score: 30,
	},
];

// End-of-topic questions
const walletsEndQuestions = [
	{
		question:
			"What is the difference between a public key and a private key?",
		options: [
			"Public keys are shorter",
			"Private keys are used to receive funds",
			"Public keys can be shared, private keys should be kept secret",
			"There is no difference",
		],
		answerIndex: 2,
		score: 30,
	},
	{
		question: "What is a recovery phrase used for?",
		options: [
			"To log into your wallet",
			"To restore your wallet if you lose access",
			"To send cryptocurrency",
			"To mine new coins",
		],
		answerIndex: 1,
		score: 40,
	},
	{
		question:
			"Which factor is NOT mentioned as important when choosing a wallet?",
		options: [
			"How much cryptocurrency you have",
			"How often you'll use it",
			"The color of the wallet",
			"Your level of tech-savviness",
		],
		answerIndex: 2,
		score: 50,
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
				duration: 5,
				content: JSON.stringify(introA),
			},
			{
				id: 2,
				title: "How do Blockchains Work?",
				duration: 5,
				content: JSON.stringify(introB),
				quiz: blockchainMidQuestions,
			},
			{
				id: 3,
				title: "Applications of Blockchain",
				duration: 5,
				content: JSON.stringify(introC),
			},
			{
				id: 4,
				title: "Why are Blockchains Important ?",
				duration: 5,
				content: JSON.stringify(introD),
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
	{
		id: 124,
		title: "WALLETS",

		description:
			"In this course, you'll explore the essential role of crypto wallets in managing and securing digital assets. You'll learn how to set up and use both hot (online) and cold (offline) wallets, understand the importance of private keys, and practice sending and receiving cryptocurrency. This course equips you with the skills to protect your assets and engage with blockchain networks safely.",
		image: "/Images/wallets.jpg",
		duration: 30,
		lessons: [
			{
				id: 1,
				duration: 5,
				title: "What are Crypto Wallets 🗃️?",
				content: introA,
			},
			{
				id: 2,
				duration: 5,
				title: "Types of Wallets?",
				content: introA,
			},
			{
				id: 3,
				duration: 5,
				title: "How do Wallets Work?",
				content: introA,
				quiz: walletsMidQuestions,
			},
			{
				id: 4,
				duration: 5,
				title: "Keeping Your Wallet Safe",
				content: introA,
			},
			{
				id: 5,
				title: "Choosing the Right Wallet",
				duration: 5,
				content: introA,
				quiz: walletsMidQuestions,
			},
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
	},
	{
		id: 125,
		title: "CRYPTOCURRENCIES",
		description:
			"This course dives into the world of digital currencies, starting with an introduction to Bitcoin and Ethereum. You’ll learn how cryptocurrency transactions work, how new coins are created through mining or staking, and the risks involved in the space. The course helps you navigate the growing world of crypto, providing insights into the opportunities and challenges it presents",
		image: "/Images/crypto.jpg",
		duration: 30,
		lessons: [
			{
				id: 1,
				duration: 5,
				title: "What are Cryptocurrencies 🪙?",
				content: introA,
			},
			{
				id: 2,
				duration: 5,
				title: "How Does It Work?",
				content: introA,
			},
			{
				id: 3,
				duration: 5,
				title: "Types of Cryptocurrencies",
				content: introA,
				quiz: cryptoMidQuestions,
			},
			{
				id: 4,
				duration: 5,
				title: "Why Use Cryptocurrencies?",
				content: introA,
			},
			{
				id: 5,
				duration: 5,
				title: "Risks and Challenges",
				content: introA,
			},
			{
				id: 6,
				duration: 5,
				title: "Getting Started 🚀",
				content: introA,
				quiz: cryptoEndQuestions,
			},
		],
		resources: {
			audio: true,
			video: true,
			text: true,
			visuals: true,
		},
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
