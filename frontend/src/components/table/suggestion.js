import React, { useState, useEffect } from 'react';

function Suggestion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/suggestions'); // Assuming your backend API is running on the same server
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <React.Fragment>
      <div className="container flex justify-center">
        <table className="w-[80%] flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            <tr className="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Roll no</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Problem</th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {suggestions.map((suggestion, index) => (
              <tr key={index} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3">{suggestion.reg}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{suggestion.description.title}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{suggestion.description.problem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Suggestion;