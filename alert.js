document.addEventListener('DOMContentLoaded', function () {
    const infoButtons = document.querySelectorAll('.infoButton');
    const card = document.getElementById('card');

    function isClickOutsideCard(event, cardElement) {
        return !cardElement.contains(event.target) && !event.target.classList.contains('infoButton');
    }

    infoButtons.forEach(button => {
        button.addEventListener('click', function () {
            card.classList.toggle('card-visible');
        });
    });

    document.addEventListener('click', function (event) {
        if (card.classList.contains('card-visible') && isClickOutsideCard(event, card)) {
            card.classList.remove('card-visible');
        }
    });
});
