import { Footer } from "./components/Footer/Footer";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./scenes/profilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Main />} />
          <Route path="/user/:userId" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
