const playSound = (e:any) => {
  const sound = e.currentTarget.dataset.key
  const audio = new Audio(`./sounds/${sound}.wav`)
  audio.play()
}

const drumKeys:NodeListOf<Element> = document.querySelectorAll('.key')
drumKeys.forEach(drumKey => drumKey.addEventListener('click', playSound))