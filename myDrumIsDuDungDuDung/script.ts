const removeTransition = e => {
  e.target.classList.remove("playing");
};

const playSound = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLDivElement;
  target.classList.add("playing");
  const sound = target.dataset.key;
  const audio = new Audio(`./sounds/${sound}.wav`);
  audio.play();
};

const drumKeys: NodeListOf<Element> = document.querySelectorAll(".key");

drumKeys.forEach(drumKey => {
  drumKey.addEventListener("transitionend", removeTransition);
  drumKey.addEventListener("click", playSound);
});
