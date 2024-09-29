import React, { useState } from 'react';
import data from './data.json';

const App = () => {
  const [jsonData, setJsonData] = useState(data);

  console.log(jsonData);

  // Handle erasing all items
  const handleEraseAll = () => {
    setJsonData([]); // Clears all data
  }

  // Handle removing a single item
  const handleEraseSingle = (id) => {
    setJsonData((prevData) => prevData.filter(item => item.id !== id));
  }

  // Handle updating an item's name by appending " Updated" to the existing name
  const handleUpdate = (id) => {
    setJsonData((prevData) => 
      prevData.map(item => {
        // Check if the item already ends with "Updated"
        if (item.id === id && !item.name.endsWith(' Updated')) {
          return { ...item, name: item.name + ' Updated' }; // Append " Updated"
        }
        return item; // Return unchanged items
      })
    );
  }
  

  return (
    <div className="p-8">
      <h1 className='text-4xl font-bold font-serif text-gray-800 mb-6'>Data from JSON</h1>
      
      {jsonData.length > 0 ? (
        <ul className="space-y-4">
          {jsonData.map((item) => (
            <li 
              key={item.id} 
              className="p-4 border border-gray-300 rounded-lg flex justify-between items-center bg-white shadow-md"
            >
              <div className="text-lg font-semibold text-gray-700">
                {item.name} - {item.occupation} - Age: {item.age}
              </div>
              <div className="space-x-4">
                <button
                  className='bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold px-4 py-2'
                  onClick={() => handleEraseSingle(item.id)}
                >
                  Remove
                </button>
                <button
                  className='bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold px-4 py-2'
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg font-semibold text-red-500 mt-6">No data available</p>
      )}

      <button 
        className='mt-6 bg-red-500 hover:bg-red-600 rounded-sm text-white font-semibold px-4 py-2'
        onClick={handleEraseAll}
      >
        Erase All
      </button>
    </div>
  );
}

export default App;
