// Define the list of questions and answers

const questions = [{
        question: "1. Tristeza",
        answers: {
            a: "No me siento triste.",
            b: "Me siento triste gran parte del tiempo.",
            c: "Me siento triste todo el timepo.",
            d: "Me siento tan triste o soy tan feliz que no puedo soportarlo."
        },
    },
    {
        question: "2. Pesimismo",
        answers: {
            a: "No estoy desalentado respecto del mi futuro.",
            b: "Me siento mas desalentado respecto de mi futuro que lo que solia estarlo.",
            c: "No espero que las cosas funcionen para mi.",
            d: "Siento que no hay esperanza para mi futuro y que solo puede empeorar."
        },
    },
    {
        question: "3. Fracaso",
        answers: {
            a: "No me siento como un fracasado.",
            b: "He fracasado mas de lo que hubiera debido.",
            c: "Cuando miro hacia atras, veo muchos fracasos.",
            d: "Siento que como persona soy un fracaso total."
        }
    }
];

// Define the points for each answer

const points = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
};

// Initialize the total score (creating counter)

let totalScore = 0;

//Loop through the questions

for (let i = 0; i < questions.length; i++) {

    //print the question

    console.log(questions[i].question);

    //print the answer

    for (let letter in questions[i].answer) {
        console.log('${letter}. ${questions[i].answer[letter]}');
    }

    //get the user's answer and calculate the score

    const userAnswer = prompt("Enter your answer").toLowerCase();
    const score = points[userAnswer] || 0;

    //add the score to the total

    totalScore += score;
}

console.log('yout total score is: ${totalScore}');