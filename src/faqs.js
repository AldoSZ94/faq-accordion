import plusIcon from './assets/img/icon-plus.svg';
import minusIcon from './assets/img/icon-minus.svg';

// Selecciona todos los elementos FAQ.
const faqsItems = document.querySelectorAll('.faqs__item');

faqsItems.forEach((item) => {
  // Botón de la pregunta.
  const questionButton = item.querySelector('.faqs__question');

  // Respuesta del FAQ.
  const answer = item.querySelector('.faqs__answer');

  // Ícono (+ / -).
  const plusButton = item.querySelector('.faqs__question-icon');

  // Evento click.
  questionButton.addEventListener('click', () => {
    // Muestra u oculta la respuesta.
    answer.toggleAttribute('hidden');

    // Verifica si el acordeón está abierto.
    const isExpanded = !answer.hasAttribute('hidden');

    // Actualiza accesibilidad.
    questionButton.setAttribute('aria-expanded', isExpanded);

    // Cambia el ícono.
    plusButton.src = isExpanded ? minusIcon : plusIcon;
  });
});
