import { questionsFilter, questionsFilter2, quienSoyQuestions } from "../quien-soy-game/quien-soy-game";

export const questions = [
  {
    id: '1',
    question: '¿Eres un chico?',
    success: 10,
    failure: 10,
    category: 'Gender'
  },
  {
    id: '2',
    question: '¿Eres una chica?',
    success: 10,
    failure: 10,
    category: 'Gender'
  },
  {
    id: '3',
    question: '¿Tienes el pelo negro?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '4',
    question: '¿Tienes el pelo marrón?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '5',
    question: '¿Tienes el pelo rubio?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '6',
    question: '¿Tienes el pelo pelirojo?',
    success: 10,
    failure: 10,
    category: "HairColor"
  },
  {
    id: '7',
    question: '¿Tienes el pelo corto?',
    success: 10,
    failure: 10,
    category: 'HairLong'
  },
  {
    id: '8',
    question: '¿Tienes el pelo largo?',
    success: 10,
    failure: 10,
    category: 'HairLong'
  },
  {
    id: '9',
    question: '¿Tienes gafas?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '10',
    question: '¿Tienes barba?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '11',
    question: '¿Tienes bigote?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  },
  {
    id: '12',
    question: '¿Tienes pendientes?',
    success: 15,
    failure: 15,
    category: 'Accesories'
  }
]

export const printQuestions = () => {

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("questionsDiv");
  quienSoyHead.appendChild(questionDiv);

  for (const question of questionsFilter) {
    const questionP = document.createElement("p");
    questionP.textContent = question.question
    questionDiv.appendChild(questionP);

    questionP.addEventListener("click", quienSoyQuestions)


  }
}

export const printQuestions2 = () => {

  const questionDiv2 = document.createElement("div");
  questionDiv2.classList.add("questionsDiv2");
  quienSoyHead.appendChild(questionDiv2);

  for (const question of questionsFilter2) {
    const questionP = document.createElement("p");
    questionP.textContent = question.question
    questionDiv2.appendChild(questionP);
  }
}