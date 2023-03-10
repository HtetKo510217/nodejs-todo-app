import { useState } from 'react';
import './App.css';
// import ConditionalRender from './components/ConditionalRender';
// import Gallery from './components/Gallery';
// import EventHandaller from './components/EventHandaller'
import ButtonEvent from './components/ButtonEvent'
function App() {
  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(count +1);
  }


  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <EventHandaller/> */}
      {/* <ConditionalRender/> */}
      <ButtonEvent count={count} onClick={handleClick}/>
      <ButtonEvent count={count} onClick={handleClick}/>
    </div>
  );
}

export default App;
