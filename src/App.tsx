
import "./App.css";
import tw from "twin.macro";

const Button = tw.button`bg-green-500 rounded-full py-4 px-8 shadow-lg text-green-100 hover:bg-green-400`;

function App() {
  return (
    <div className="App">
      <Button>I'm a button</Button>
    </div>
  );
}

export default App;
