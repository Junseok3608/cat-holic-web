const API_KEY = "bf65b801f95e520704b74f91bba4597d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      const weather = document.querySelector("#weather");
      weather.innerHTML = `
      <span>지역명: ${data.name}</span>
      <span>날씨상태: ${data.weather[0].main}</span>
      <span>평균 기온: ${Math.floor(data.main.temp)}도</span>
      `;

      // test
      console.log(data);
    })
  );
}
function onGeoError() {
  alert(`can't find you. no weather for you`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
