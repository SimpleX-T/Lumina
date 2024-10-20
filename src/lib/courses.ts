import { CourseProps, QuestionProps } from "@/app/types";

const blockchainFirstQuestions: QuestionProps[] = [
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

const blockchainMidQuestions: QuestionProps[] = [
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

const blockchainEndQuestions: QuestionProps[] = [
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

// Mid-lesson questions
const cryptoMidQuestions: QuestionProps[] = [
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
const cryptoEndQuestions: QuestionProps[] = [
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
const walletsMidQuestions: QuestionProps[] = [
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
const walletsEndQuestions: QuestionProps[] = [
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

export const courseData: CourseProps[] = [
	{
		id: 123,
		title: "BLOCKCHAIN FUNDAMENTALS",
		description:
			"This course introduces you to the core concepts behind blockchain technology. You'll learn how blockchains work, what makes them secure, and why decentralization is a key feature of this revolutionary technology. By the end, you'll understand how blockchains power cryptocurrencies and many other applications.",
		image: "/Images/fundamentals.jpg",
		duration: 180000000,
		lessons: [
			{
				id: 1,
				title: "What is Blockchain 🤷🏾‍♂️?",
				duration: 30000000,
				content: "lesson1231",
			},
			{
				id: 2,
				title: "How do Blockchains Work?",
				duration: 30000000,
				content: "lesson1232",
			},
			{
				id: 3,
				title: "Types of Blockchain",
				duration: 30000000,
				content: "lesson1233",
				quiz: blockchainFirstQuestions,
			},
			{
				id: 4,
				title: "Consensus Mechanisms",
				duration: 30000000,
				content: "lesson1234",
			},
			{
				id: 5,
				title: "Smart Contracts",
				duration: 30000000,
				content: "lesson1235",
			},
			{
				id: 6,
				title: "Tokens 💰",
				duration: 30000000,
				content: "lesson1236",
				quiz: blockchainMidQuestions,
			},
			{
				id: 7,
				title: "Decentralized Finance (DeFi) 💸",
				duration: 30000000,
				content: "lesson1237",
			},
			{
				id: 8,
				title: "Uses of Blockchain 🌍🔗",
				duration: 30000000,
				content: "lesson1238",
			},
			{
				id: 9,
				title: "Why Do We Need Blockchain? 🤔",
				duration: 30000000,
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
	{
		id: 124,
		title: "WALLETS",

		description:
			"In this course, you'll explore the essential role of crypto wallets in managing and securing digital assets. You'll learn how to set up and use both hot (online) and cold (offline) wallets, understand the importance of private keys, and practice sending and receiving cryptocurrency. This course equips you with the skills to protect your assets and engage with blockchain networks safely.",
		image: "/Images/wallet.jpg",
		duration: 180000000,
		lessons: [
			{
				id: 1,
				duration: 30000000,
				title: "What are Crypto Wallets 🗃️?",
				content: "lesson1232",
			},
			{
				id: 2,
				duration: 30000000,
				title: "Types of Wallets?",
				content: "lesson1232",
			},
			{
				id: 3,
				duration: 30000000,
				title: "How do Wallets Work?",
				content: "lesson1232",
				quiz: walletsMidQuestions,
			},
			{
				id: 4,
				duration: 30000000,
				title: "Keeping Your Wallet Safe",
				content: "lesson1232",
			},
			{
				id: 5,
				title: "Choosing the Right Wallet",
				duration: 30000000,
				content: "lesson1232",
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
		duration: 180000000,
		lessons: [
			{
				id: 1,
				duration: 30000000,
				title: "What are Cryptocurrencies 🪙?",
				content: "lesson1232",
			},
			{
				id: 2,
				duration: 30000000,
				title: "How Does It Work?",
				content: "lesson1232",
			},
			{
				id: 3,
				duration: 30000000,
				title: "Types of Cryptocurrencies",
				content: "lesson1232",
				quiz: cryptoMidQuestions,
			},
			{
				id: 4,
				duration: 30000000,
				title: "Why Use Cryptocurrencies?",
				content: "lesson1232",
			},
			{
				id: 5,
				duration: 30000000,
				title: "Risks and Challenges",
				content: "lesson1232",
			},
			{
				id: 6,
				duration: 30000000,
				title: "Getting Started 🚀",
				content: "lesson1232",
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
