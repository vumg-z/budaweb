document.addEventListener('DOMContentLoaded', function () {
    const infoButton = document.getElementById('infoButton');
    const card = document.getElementById('card');

    function isClickOutsideCard(event, cardElement) {
        return !cardElement.contains(event.target) && event.target !== infoButton;
    }

    infoButton.addEventListener('click', function () {
        card.classList.toggle('card-visible');
    });

    document.addEventListener('click', function (event) {
        if (card.classList.contains('card-visible') && isClickOutsideCard(event, card)) {
            card.classList.remove('card-visible');
        }
    });
});
