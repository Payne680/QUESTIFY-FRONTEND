import Popup from "./Components/Popup";
import { useState } from "react";

export default function App() {
  const [popButton, setPopButton] = useState(false);
//   const [timePopup, setTimePopup] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br />
        <br />
        <button onClick={() => setPopButton(true)}>Open Popup</button>
        <Popup trigger={popButton} setTrigger={setPopButton}>
          <h3>My Popup</h3>
          <p>This is my triggered button popup</p>
        </Popup>

        <Popup trigger={timePopup} setTrigger={setTimePopup}>
          <h3>My Popup</h3>
          <p>This is time triggered popup</p>
        </Popup>
      </main>
    </div>
  );
}
