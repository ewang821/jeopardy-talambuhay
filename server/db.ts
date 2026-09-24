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
        question: 'When was the first iPhone released?',
        answer: '2007',
    },
        {
        points: 500,
        question: 'What black and white mammal has an extra thumb?';
        answer: 'Panda',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 500,
            question:
                'What dog breed is this?',
            imgSrc: 'IMG_6324',
            answer: 'Bichon Frise',
        },
        {
            points: 100,
            question:
                'How long is an olympic pool?',
            answer: '50 m',
        },
        {
            points: 200,
            question: 'What neighbourhood is Horace Mann in?',
            answer: 'Riverdale',

        },
        {
            points: 300,
            question: 'Who is the main character in To All the Boys I\'ve Loved Before',
            answer: 'Lara Jean',
        },
        {
            points: 400,
            question:
                'What art medium was created in 1934?',
            answer: 'Acrylic paint',

        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What city has the Statue of Liberty?',
        imgSrc:
            "statue-of-liberty-GettyImages-539667859",
        answer: 'New York City',
    },
{
        points: 200,

        question:
            'Which continent has the top two most populated countries?',
        answer: 'Asia',
    }
]);


const categories = [
    {
        title: 'Emma\'s Past',
        questions: pastQuestions
    },
    {
        title: `Emma's Present`,
        questions: presentQuestions
    },
    {
        title: "Emma's Future",
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