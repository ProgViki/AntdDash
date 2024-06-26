import React, { useState, ChangeEvent } from 'react'

type Props = {}

const Weather = (props: Props) => {
    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<any>([]);

    const getSearchOptions = (value: string) =>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
            process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => setOptions(data))

    }
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const{ value} = e.target;
        setTerm(value);
        if (value === "") return
        getSearchOptions(value);
    }
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-500 h-screen w-full">
        <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24
        h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg text-zinc-700">
            <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
            <p className="text-sm mt-2">Enter below a place you want to know the weather of and select an option from the dropdown</p>

            <div className="flex mt-10 md:mt-4">
                <input type="text" placeholder="Enter a place" value={term} onChange={onInputChange}
                className="px-2 py-1 mt-10 rounded-l-md border-2 border-white" />

                {options.map((option: {name: string }) => (
                        <p>{option.name}</p> 
                )
                
                )}
                <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-100 px-2 py-1 cursor-pointer">
                    search
                </button>
            </div>
        </section>
    </main>
  )
}

export default Weather