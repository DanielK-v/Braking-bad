import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card';
const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let output;
  if (data.length >= 1 && isLoading === false) {
    output = data.map((character) => (
      <Card key={character.char_id} character={character} />
    ));
  } else if (data.length < 1 && isLoading === false) {
    output = <h2 className="text-white text-lg">No characters found.</h2>;
  } else {
    output = <h2 className="text-white text-lg">Loading...</h2>;
  }
  return (
    <div className="bg-green-900">
      <div className="container mx-auto">
        <div className="flex flex-wrap content-center">
          <input
            placeholder="info for character..."
            className="mx-auto h-8  w-full rounded my-3 focus:ring-2 focus:ring-green-600 px-2"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">{output}</div>
      </div>
      <footer>
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2 transform hover:scale-x-110">
              Powered by:{' '}
              <a href="https://breakingbadapi.com/">The Breaking bad API</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
