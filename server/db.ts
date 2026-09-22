import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which hill school shares the HM school color?',
        answer: 'Riverdale',
    },
    {
        points: 200,
        question:
            'Which continent has 44 countries?',
        answer: 'Europe',
    },
    {
        points: 300,
        question:
            'What is the largest island in the US?',
        answer: 'Long Island',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What dog breed is this?',
            imgSrc: '/donu-gif.gif',
            answer: 'Bichon Frise',
        },
        {
            points: 100,
            question:
                'How long is an olympic pool?',
            imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
            answer: '50 m',
        },
        {
            points: 200,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 300,
            question:
                'What art medium was created in 1934?',
            answer: 'Acrylic paint',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Ms Feng\'s Past',
        questions: pastQuestions
    },
    {
        title: `Ms. Feng's Present`,
        questions: presentQuestions
    },
    {
        title: "Ms. Feng's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}