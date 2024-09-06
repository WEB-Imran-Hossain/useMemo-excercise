import React, { useMemo, useState } from 'react';

const NumberList = ({ numbers }) => {
  const [isEven, setIsEven] = useState(true);

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(number => 
      isEven ? number % 2 === 0 : number % 2 !== 0
    );
  }, [numbers, isEven]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Filtered Numbers</h1>
      
      <button 
        onClick={() => setIsEven(prevIsEven => !prevIsEven)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Show ${isEven ? 'Odd' : 'Even'} Numbers`}
      >
        {isEven ? 'Show Odd Numbers' : 'Show Even Numbers'}
      </button>
      
      <ul className="mt-4 list-disc pl-5">
        {filteredNumbers.map((number, index) => (
          <p key={index} className="text-lg">
            {number}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;