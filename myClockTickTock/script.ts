const secondHand: HTMLDivElement = document.querySelector(".second-hand");
const minsHand: HTMLDivElement = document.querySelector(".min-hand");
const hourHand: HTMLDivElement = document.querySelector(".hour-hand");
const city: HTMLSpanElement = document.querySelector(".city");
const weatherStatus: HTMLSpanElement = document.querySelector(".status");

type Coords = {
  lat: number;
  long: number;
};

type WeatherResponse = {
  name: string;
  weather: Array<{
    main: string;
  }>;
};

const getWeather = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=351d5e96c2167ecb571357e8e67eaf73`
    )
      .then(res => res.json())
      .then((res: WeatherResponse) => {
        city.innerText = res.name;
        weatherStatus.innerText = res.weather[0].main;
      });
  });
};

const setDate = () => {
  const now = new Date();

  seconds++;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);

const initialDate = new Date();
let seconds = initialDate.getSeconds();

setDate();
getWeather();
