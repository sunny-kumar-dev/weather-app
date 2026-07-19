import { useState } from "react";
import axios from "axios";

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!search) return;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2291680b6088b55ccfb6c69907a0bad2&units=metric`
      );
      setWeather(res.data);
    } catch {
      alert("City not found");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-sky-400 to-blue-500">

      <div className="w-[380px] bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:scale-[1.02] transition duration-300">

        {/* 🔍 SEARCH BAR */}
        <div className="flex items-center bg-blue-400/80 rounded-full px-4 py-2 
            shadow-md hover:shadow-lg transition-all duration-300">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search city..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white"
          />

          <button 
            onClick={getWeather}
            className="text-white text-lg"
          >
            🔍
          </button>

        </div>

        {/* 🌦️ WEATHER */}
        {weather && (
          <div className="text-center mt-6">

            <h2 className="text-lg font-semibold text-gray-700 text-2xl">
              Current Weather
            </h2>

            <p className="text-sm text-gray-600 font-medium">
              {new Date().toLocaleTimeString()}
            </p>

            <div className="flex items-center justify-center gap-6 mt-5">

              <span className="text-6xl animate-bounce">☁️</span>

              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {weather.main.temp}°C
              </h1>

            </div>

            {/* INFO BOX */}
            <div className="mt-6 bg-white/60 rounded-2xl p-4 grid grid-cols-2 gap-4 text-sm shadow-inner hover:scale-105 transition duration-300">

              <p>🌬️ Wind: {weather.wind.speed} m/s</p>
              <p>☁️ Cloud: {weather.clouds.all}%</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
              <p>📊 Pressure: {weather.main.pressure} hPa</p>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;