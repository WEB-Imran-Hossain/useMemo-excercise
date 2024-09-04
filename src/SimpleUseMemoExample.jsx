import { useState, useMemo } from 'react';

function SimpleUseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const doubledCount = useMemo(() => {
    console.log('Calculating doubled count...');
    return count * 2;
  }, [count]);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Simple useMemo Example</h1>
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
  );
}

export default SimpleUseMemoExample;