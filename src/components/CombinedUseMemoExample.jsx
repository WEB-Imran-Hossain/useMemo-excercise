import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Jerry' },
];

function CombinedUseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);

  // Memoized calculation of doubled count
  const doubledCount = useMemo(() => {
    console.log('Calculating doubled count...');
    return count * 2;
  }, [count]);

  // Memoized filtering of users based on search term
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold">Combined useMemo Example</h1>
      
      {/* Section for counting and doubling */}
      <div className="space-y-4">
        <p className="text-lg">Count: <span className="font-semibold">{count}</span></p>
        <p className="text-lg">Doubled Count: <span className="font-semibold">{doubledCount}</span></p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 px-3 py-2 rounded w-full"
        />
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
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setToggle(!toggle)}
        >
          Toggle Message
        </button>
        {filteredUsers.map(user => (
          <p key={user.id} className="text-lg">{user.name}</p>
        ))}
        {toggle && <p className="text-lg text-gray-700">The list is toggled!</p>}
      </div>
    </div>
  );
}

export default CombinedUseMemoExample;