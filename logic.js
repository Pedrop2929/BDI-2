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
        },
    },
    {
        question: "4. Perdida de Placer",
        answers: {
            a: "Obtengo tanto placer como siempre por las cosas que disfruto.",
            b: "HNo disfruto tanto de las cosas como solia hacerlo.",
            c: "Obtengo muy pooco placer de las cosas que solia disfrutar.",
            d: "No puedo optener ningun placer de las cosas de las que solia disfrutar.."
        },
    },
    {
        question: "5. Sentimientos de Culpa",
        answers: {
            a: "No me siento particularmente culpable.",
            b: "Me siento culpable al respecto de varias cosas que he hecho o que deberia haber hecho.",
            c: "Me siento bastante culpable la mayor parte del tiempo.",
            d: "Me siento culpable todo el tiempo."
        },
    },
    {
        question: "6. Sentimientos de Castigo",
        answers: {
            a: "No siento que este siendo castigado.",
            b: "Siento que tal vez pueda ser castigado.",
            c: "Espero ser castigado.",
            d: "Siento que estoy siendo castigado."
        },
    },
    {
        question: "7. Disconformidad con uno mismo",
        answers: {
            a: "Siento acerca de mi lo mismo que siempre.",
            b: "He perdido la confiazna en mi mismo.",
            c: "Estoy decepiconado conmigo mismo.",
            d: "No me gusto a mi mismo."
        },
    },
    {
        question: "8. Autocritica",
        answers: {
            a: "No me critico ni me culpo m??s de lo habitual.",
            b: "Estoy m??s cr??tico conmigo mismo de lo que sol??a estarlo.",
            c: "Me critico a m?? mismo por todos mis errores.",
            d: " Me culpo a m?? mismo por todo lo malo que sucede."
        },
    },
    {
        question: "9. Pensamientos o Deseos Suicidas",
        answers: {
            a: "No tengo ning??n pensamiento de matarme.",
            b: "He tenido pensamientos de matarme, pero no lo har??a.",
            c: "Querr??a matarme.",
            d: "Me matar??a si tuviera la oportunidad de hacerlo."
        },
    },
    {
        question: "10. Llanto",
        answers: {
            a: "No lloro m??s de lo que sol??a hacerlo.",
            b: "Lloro m??s de lo que sol??a hacerlo.",
            c: "Lloro por cualquier peque??ez.",
            d: "Siento ganas de llorar pero no puedo."
        },
    },
    {
        question: "11. Agitacion",
        answers: {
            a: "No estoy m??s inquieto o tenso que lo habitual.",
            b: "Me siento m??s inquieto o tenso que  lo habitual.",
            c: "Estoy tan inquieto o agitado que me es dif??cil quedarme quieto.",
            d: "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."
        },
    },
    {
        question: "12. Perdida de Interes",
        answers: {
            a: "No he perdido el inter??s en otras actividades o personas.",
            b: "Estoy menos interesado que antes en otras personas o cosas.",
            c: "He perdido casi todo el inter??s en otras personas o cosas.",
            d: "Me es dif??cil interesarme por algo."
        },
    },
    {
        question: "13. Indecision",
        answers: {
            a: "Tomo mis propias decisiones tan bien como siempre.",
            b: "Me resulta m??s dif??cil que de costumbre tomar decisiones.",
            c: "Encuentro mucha m??s dificultad que antes para tomar decisiones.",
            d: "Tengo problemas para tomar cualquier decisi??n."
        },
    },
    {
        question: "14. Desvalorizacion",
        answers: {
            a: " No siento que yo no sea valioso.",
            b: "No me considero a mi mismo tan valioso y ??til como sol??a considerarme.",
            c: "Me siento menos valioso cuando me comparo con otros.",
            d: "Siento que no valgo nada."
        },
    },
    {
        question: "15. Perdida de energia",
        answers: {
            a: "Tengo tanta energ??a como siempre.",
            b: "Tengo menos energ??a que la que sol??a tener.",
            c: "No tengo suficiente energ??a para hacer demasiado.",
            d: "No tengo energ??a suficiente para hacer nada. "
        },
    },
    {
        question: "16. Cambios en los habitos del sue??o",
        answers: {
            a: "No he experimentado ning??n cambio en mis h??bitos de sue??o.",
            b: "Duermo un poco m??s que lo habitual.",
            b2: "Duermo un poco menos que lo habitual.",
            c: "Duermo mucho m??s que lo habitual.",
            c2: "Duermo mucho menos que lo habitual.",
            d: "Duermo la mayor parte del d??a.",
            d2: "Me despierto  1-2 horas m??s temprano y no puedo volver a dormirme."
        },
    },
    {
        question: "17. Irritabilidad",
        answers: {
            a: "No estoy tan irritable que lo habitual.",
            b: "Estoy m??s irritable que lo habitual.",
            c: "Estoy mucho m??s irritable que lo habitual.",
            d: "Estoy irritable todo el tiempo."
        },
    },
    {
        question: "18. Cambios en el apetito",
        answers: {
            a: "No he experimentado ning??n cambio en mi apetito.",
            b: "Mi apetito es un poco menor que lo habitual.",
            b2: "Mi apetito es un poco mayor que lo habitual.",
            c: "Mi apetito es mucho menor que antes.",
            c2: "Duermo mucho menos que lo habitual.",
            d: "Duermo la mayor parte del d??a.",
            d2: "Me despierto  1-2 horas m??s temprano y no puedo volver a dormirme."
        },
    },
    {
        question: "19. Dificultad de Concentracion",
        answers: {
            a: "Puedo concentrarme tan bien como siempre.",
            b: "No puedo concentrarme tan bien como habitualmente.",
            c: "Me es dif??cil mantener la mente en algo por mucho tiempo.",
            d: "Encuentro que no puedo concentrarme en nada. "
        },
    },
    {
        question: "20. Cansancio o Fatiga",
        answers: {
            a: "No estoy mas cansado o fatigado que lo habitual.",
            b: "Me fatigo o me canso mas facilmente que lo habitual. ",
            c: "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solia hacer",
            d: " "
        },
    },
    {
        question: "21. Perdida de interes en el Sexo ",
        answers: {
            a: "No he notado ningun cambio reciente en mi interes por el sexo.",
            b: "Estoy menos interesado en el sexo de lo que solia estarlo.",
            c: "Estoy mucho menos interesado en el sexo.",
            d: "He perdido completamente el interes en el sexo."
        },
    },


];

// Define the points for each answer

const points = {
    a: 0,
    b: 1,
    b2: 1,
    c: 2,
    c2: 2,
    d: 3,
    d2: 3,
};

// Initialize the total score (creating counter)

let totalScore = 0;

//Loop through the questions

for (let i = 0; i < questions.length; i++) {

    //print the question

    console.log(questions[i].question);

    //print the answer

    for (let letter in questions[i].answers) {
        console.log(`${letter}. ${questions[i].answers[letter]}`);
    }

    //get the user's answer and calculate the score

    const userAnswer = prompt("Enter your answer").toLowerCase();
    const score = points[userAnswer] || 0;

    //add the score to the total

    totalScore += score;
}

console.log(`yout total score is: ${totalScore}`);