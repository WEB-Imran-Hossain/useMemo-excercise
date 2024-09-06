import NumberList from "./components/NumberList";

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="p-4">
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;