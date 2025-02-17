fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.querySelector(
      "main"
    ).style.backgroundImage = `url(${data.urls.regular})`;
    document.querySelector(".author").textContent = `Author: ${data.user.name}`;
  })
  .catch((err) => console.error(err));

setInterval(
  () =>
    (document.querySelector(".time").textContent =
      new Date().toLocaleTimeString("en-US")),
  1000
);

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".name-and-icon").innerHTML = `
      <img src="${data.image.large}" />
      <span>${data.name}</span>
    `;
    document.querySelector(".prices").innerHTML = `
      
      <p><i class="fa-solid fa-arrow-right"></i> $${data.market_data.current_price.usd}</p>
      <p><i class="fa-solid fa-arrow-up"></i> $${data.market_data.high_24h.usd}</p>
      <p><i class="fa-solid fa-arrow-down"></i> $${data.market_data.low_24h.usd}</p>
    `;
  });

navigator.geolocation.getCurrentPosition((position) =>
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Weather data is not available");
      }
      return res.json();
    })
    .then((data) => {
      document.querySelector(".weather").innerHTML = `
      <div class="icon-and-temperature">
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png"/>
        <p>${Math.round(data.main.temp)}&#176</p>
      </div>
      <p>${data.name}</p>
      `;
    })
    .catch((err) => {
      console.error(err);
    })
);
