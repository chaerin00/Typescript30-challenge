const playSound = (e) => {
    const sound = e.currentTarget.dataset.key;
    const audio = new Audio(`./sounds/${sound}.wav`);
    audio.play();
};
const drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(drumKey => drumKey.addEventListener('click', playSound));
