import Map from "./components/map/Map.js";
import Navbar from "./components/navbar/Navbar.jsx";
import { useState } from "react";
//
function App() {
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <div className="App">
      <Map></Map>
      
    </div>
  );
}
//TEst

export default App;

