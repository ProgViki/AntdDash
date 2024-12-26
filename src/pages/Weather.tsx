import React, { useState, ChangeEvent } from 'react';

type Props = {}

const Weather = (props: Props) => {
  const [term, setTerm] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const API_KEY = '29d4774456e17009381ca1db6b799d94'; 

// const API_KEY = import.meta.env.REACT_APP_API_KEY;


  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTerm(value);
  }

  const onSearchClick = () => {
    if (term === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-500 h-screen w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24
        h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        <p className="text-sm mt-2 text-white">Enter below a place you want to know the weather of</p>

        <div className="flex mt-10 md:mt-4 justify-center items-center">
          <input type="text" placeholder="Enter a place" value={term} onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-2 border-white" />
          <button onClick={onSearchClick} className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-100 px-2 py-1 cursor-pointer">
            search
          </button>
        </div>

        {weatherData && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Weather in {weatherData.name}</h2>
            <p className="text-lg text-white">Temperature: {weatherData.main.temp} K</p>
            <p className="text-lg text-white">Humidity: {weatherData.main.humidity} %</p>
            <p className="text-lg text-white">Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Weather;