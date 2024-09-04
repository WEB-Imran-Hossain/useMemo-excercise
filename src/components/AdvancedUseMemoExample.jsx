import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Jerry' },
];

function AdvancedUseMemoExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);

  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Advanced useMemo Example</h1>
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
  );
}

export default AdvancedUseMemoExample;