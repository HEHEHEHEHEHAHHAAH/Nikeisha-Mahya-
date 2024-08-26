function toggleLetter() {
    const flap = document.querySelector('.flap');
    const letter = document.getElementById('letterContent');
    flap.classList.toggle('open');
    letter.classList.toggle('show');
}
