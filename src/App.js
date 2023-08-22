import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
