function Search({ searchData, eventHandler, searchWeather }) {

  return (
    <div className="flex gap-2">

      <input
        value={searchData}
        onChange={(e) => eventHandler(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 p-2 rounded-lg bg-white/20 outline-none"
      />

      <button
        onClick={searchWeather}
        className="bg-blue-500 px-4 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>

    </div>
  );
}

export default Search;