import { CourseContentProps, CourseProps, QuestionProps } from "@/app/types";
import introA from "@/components/courses/(123)/intro1";
import introB from "@/components/courses/(123)/intro1";
import introC from "@/components/courses/(123)/intro1";
import introD from "@/components/courses/(123)/intro1";
const blockchainMidQuestions: QuestionProps[] = [
  {
    question: "What is a blockchain primarily compared to in our explanation?",
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
const blockchainEndQuestions: QuestionProps[] = [
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
    question: "How does blockchain ensure the integrity of past transactions?",
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
    question: "What is a cryptocurrency wallet compared to in our explanation?",
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
    options: ["Digital coins", "Passwords", "Special keys", "Blockchain data"],
    answerIndex: 2,
    score: 20,
  },
  {
    question:
      "Which type of wallet is described as being like money in your pocket?",
    options: ["Cold wallet", "Hardware wallet", "Hot wallet", "Paper wallet"],
    answerIndex: 2,
    score: 30,
  },
];

// End-of-topic questions
const walletsEndQuestions: QuestionProps[] = [
  {
    question: "What is the difference between a public key and a private key?",
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
    id: 1,
    title: "BLOCKCHAIN FUNDAMENTALS",
    description:
      "This course introduces you to the core concepts behind blockchain technology. You'll learn how blockchains work, what makes them secure, and why decentralization is a key feature of this revolutionary technology. By the end, you'll understand how blockchains power cryptocurrencies and many other applications.",
    image: "/Images/misc.jpg",
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "Introduction to Blockchain", duration: "5M" },
      { name: "How Blockchain Works", duration: "5M" },
      { name: "Applications of Blockchain", duration: "10M" },
      { name: "Why are Blockchains Important? ", duration: "10M" },
    ],
    resources: {
      audio: true,
      video: true,
      text: true,
      visuals: true,
    },
  },
  {
    id: 2,
    title: "WALLETS",
    description:
      "In this course, you'll explore the essential role of crypto wallets in managing and securing digital assets. You'll learn how to set up and use both hot (online) and cold (offline) wallets, understand the importance of private keys, and practice sending and receiving cryptocurrency. This course equips you with the skills to protect your assets and engage with blockchain networks safely.",
    image: "/Images/misc.jpg",
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "What are Crypto Wallets", duration: "5M" },
      { name: "Types of Wallets", duration: "5M" },
      { name: "How do Wallets work?", duration: "10M" },
      { name: "Keeping your Wallet Safe", duration: "10M" },
      { name: "Choosing the Right Wallet", duration: "10M" },
    ],
    resources: {
      audio: true,
      video: true,
      text: true,
      visuals: true,
    },
  },
  {
    id: 3,
    title: "CRYPTOCURRENCIES",
    description:
      "This course dives into the world of digital currencies, starting with an introduction to Bitcoin and Ethereum. You’ll learn how cryptocurrency transactions work, how new coins are created through mining or staking, and the risks involved in the space. The course helps you navigate the growing world of crypto, providing insights into the opportunities and challenges it presents",
    image: "/Images/misc.jpg",
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "What are Cryptocurrencies", duration: "5M" },
      { name: "How Cryptocurrency Transactions Work", duration: "10M" },
      { name: "Types of cryptocurrencies", duration: "5M" },
      { name: "Why Use Cryptocurrencies", duration: "10M" },
      { name: "Risks and Challenges in Cryptocurrencies", duration: "10M" },
      { name: "Getting Strated With Cryptocurrencies", duration: "10M" },
    ],
    resources: {
      audio: true,
      video: true,
      text: true,
      visuals: true,
    },
  },
];
export const courseContent: CourseContentProps[] = [
  {
    id: 123,
    lessons: [
      {
        id: 1,
        name: "What is Blockchain 🤷🏾‍♂️?",
        duration: "5M",
        content: introA,
      },
      {
        id: 2,
        name: "What is Blockchain 🤷🏾‍♂️?",
        duration: "5M",
        content: introB,
        quiz: blockchainMidQuestions,
      },
      {
        id: 3,
        name: "What is Blockchain 🤷🏾‍♂️?",
        duration: "5M",
        content: introC,
      },
      {
        id: 4,
        name: "What is Blockchain 🤷🏾‍♂️?",
        duration: "5M",
        content: introD,
        quiz: blockchainEndQuestions,
      },
    ],
  },
  {
    id: 124,
    lessons: [
      {
        id: 1,
        name: "What are Crypto Wallets 🗃️?",
        duration: "5M",
        content: introA,
      },
      {
        id: 2,
        name: "Types of Wallets?",
        duration: "5M",
        content: introA,
      },
      {
        id: 3,
        name: "How do Wallets Work?",
        duration: "5M",
        content: introA,
        quiz: walletsMidQuestions,
      },
      {
        id: 4,
        name: "Keeping Your Wallet Safe",
        duration: "5M",
        content: introA,
      },
      {
        id: 5,
        name: "Choosing the Right Wallet",
        duration: "10M",
        content: introA,
        quiz: walletsMidQuestions,
      },
    ],
  },
  {
    id: 125,
    lessons: [
      {
        id: 1,
        name: "What are Cryptocurrencies 🪙?",
        duration: "5M",
        content: introA,
      },
      {
        id: 2,
        name: "How Does It Work?",
        duration: "5M",
        content: introA,
      },
      {
        id: 3,
        name: "Types of Cryptocurrencies",
        duration: "5M",
        content: introA,
        quiz: cryptoMidQuestions,
      },
      {
        id: 4,
        name: "Why Use Cryptocurrencies?",
        duration: "5M",
        content: introA,
      },
      {
        id: 5,
        name: "Risks and Challenges",
        duration: "5M",
        content: introA,
      },
      {
        id: 6,
        name: "Getting Started 🚀",
        duration: "5M",
        content: introA,
        quiz: cryptoEndQuestions,
      },
    ],
  },
];
