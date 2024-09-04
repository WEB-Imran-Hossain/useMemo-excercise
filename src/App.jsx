import AdvancedUseMemoExample from "./components/AdvancedUseMemoExample";
import SimpleUseMemoExample from "./SimpleUseMemoExample";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <SimpleUseMemoExample />
      
      <AdvancedUseMemoExample />
    </div>
  )
}

export default App;
