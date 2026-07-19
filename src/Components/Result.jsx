import { WiCloud, WiDaySunny, WiRain, WiStrongWind, WiHumidity } from "react-icons/wi";

function Result({ weather }) {

  const getIcon = () => {
    const type = weather.weather[0].main;

    if (type === "Clouds") return <WiCloud size={60} />;
    if (type === "Clear") return <WiDaySunny size={60} />;
    if (type === "Rain") return <WiRain size={60} />;
    return <WiCloud size={60} />;
  };

  return (
    <div className="text-center animate-fadeIn">

      <h2 className="text-lg font-semibold text-gray-700">
        Current Weather
      </h2>

      <p className="text-sm text-gray-500">
        {new Date().toLocaleTimeString()}
      </p>

      <div className="flex items-center justify-center gap-4 mt-4">

        <div className="animate-bounce text-blue-500">
          {getIcon()}
        </div>

        <h1 className="text-4xl font-bold text-gray-800">
          {weather.main.temp}°C
        </h1>

      </div>

      {/* INFO */}
      <div className="mt-5 bg-white/60 rounded-xl p-3 grid grid-cols-2 gap-3 text-sm">

        <p className="flex items-center gap-2">
          <WiStrongWind size={20} /> {weather.wind.speed}
        </p>

        <p className="flex items-center gap-2">
          <WiCloud size={20} /> {weather.clouds.all}%
        </p>

        <p className="flex items-center gap-2">
          <WiHumidity size={20} /> {weather.main.humidity}%
        </p>

        <p className="flex items-center gap-2">
          📊 {weather.main.pressure}
        </p>

      </div>

    </div>
  );
}

export default Result;