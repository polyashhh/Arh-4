const subscribeForm = document.querySelector('#subscribeForm');
const formMessage = document.querySelector('#formMessage');

if (subscribeForm && formMessage) {
    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.querySelector('#email');
        formMessage.textContent = `Готово! Новости будут приходить на ${emailInput.value}`;
        subscribeForm.reset();
    });
}
const filterButtons = document.querySelectorAll('.filter__button');
const bookCards = document.querySelectorAll('.book-card[data-category]');
filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const filter = button.dataset.filter;
        filterButtons.forEach(function (item) {
            item.classList.remove('filter__button--active');
        });
        button.classList.add('filter__button--active');
        bookCards.forEach(function (card) {
            const category = card.dataset.category;

            if (filter === 'all' || category === filter) {
                card.classList.remove('book-card--hidden');
            } else {
                card.classList.add('book-card--hidden');
            }
        });
    });
});
