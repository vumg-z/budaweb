document.addEventListener('DOMContentLoaded', function () {
    const infoButton = document.getElementById('infoButton');
    const card = document.getElementById('card');

    infoButton.addEventListener('click', function () {
        card.classList.toggle('card-visible');
    });
});