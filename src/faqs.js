// Selecciona todas las preguntas del accordion.
const questions = document.querySelectorAll('.faqs__question');

questions.forEach((question) => {
  // Escucha el click en cada pregunta.
  question.addEventListener('click', () => {
    // Obtiene la respuesta asociada.
    const answer = question.nextElementSibling;

    // Obtiene el ícono del botón.
    const btnPlus = question.querySelector('.faqs__question-icon');

    // Muestra u oculta la respuesta.
    answer.classList.toggle('active');

    // Cambia el ícono según el estado.
    if (answer.classList.contains('active')) {
      btnPlus.src = './src/assets/img/icon-minus.svg';
    } else {
      btnPlus.src = './src/assets/img/icon-plus.svg';
    }
  });
});
