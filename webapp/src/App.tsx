import Rbutton from "./components/rbutton/rbutton";
import RClock from "./components/rclock/rclock";

function App() {
  return (
    <div className="flex flex-col w-full min-h-lvh ...">
      <div id="header" className="flex w-full sticky top-0 bg-sky-300 p-4 ... ">
       <img src="./react.svg" />
      </div>
      <div id="content" className="w-full min-h-lvh">
        <RClock></RClock>
        <Rbutton onClick={() => alert('Hi you are fool')}>Don't Click</Rbutton>

      </div>

      <div id="footer" className="flex w-full sticky bottom-0 bg-sky-300 p-4 ...">
        <Rbutton>
          footer button
        </Rbutton>
      </div>
    </div>
  );
}
export default App;
