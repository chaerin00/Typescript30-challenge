const removeTransition = (e) => {
    const target = e.target;
    target.classList.remove("playing");
};
const playSound = (e) => {
    const target = e.currentTarget;
    target.classList.add("playing");
    const sound = target.dataset.key;
    const audio = new Audio(`./sounds/${sound}.wav`);
    audio.play();
};
const drumKeys = document.querySelectorAll(".key");
drumKeys.forEach(drumKey => {
    drumKey.addEventListener("transitionend", removeTransition);
    drumKey.addEventListener("click", playSound);
});
