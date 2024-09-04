import React, { useState, useMemo } from 'react';

// Sample users array
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Jerry' },
];

function CombinedUseMemoExampleTwo() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);

  // Memoized calculation: Complex calculation (e.g., factorial)
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const computeFactorial = (n) => {
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(count);
  }, [count]);

  // Memoized filtering: Filtering users based on the search term
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold">Advanced useMemo Example</h1>
      
      {/* Section for factorial calculation */}
      <div className="space-y-4">
        <p className="text-lg">Count: <span className="font-semibold">{count}</span></p>
        <p className="text-lg">Factorial: <span className="font-semibold">{factorial}</span></p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setCount(0)}
        >
          Reset Count
        </button>
      </div>

      {/* Section for searching and filtering users */}
      <div className="space-y-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
          className="border border-gray-300 px-3 py-2 rounded w-full"
        />
        <div>
          <p className="text-lg font-semibold">Filtered Users:</p>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <p key={user.id} className="text-lg">{user.name}</p>
            ))
          ) : (
            <p className="text-gray-500">No users found.</p>
          )}
        </div>
      </div>

      {/* Toggle section */}
      <div className="space-y-4">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setToggle(!toggle)}
        >
          Toggle Message
        </button>
        {toggle && <p className="text-lg text-gray-700">The list is toggled!</p>}
      </div>
    </div>
  );
}

export default CombinedUseMemoExampleTwo;
