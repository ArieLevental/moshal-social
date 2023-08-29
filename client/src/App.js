import { Footer } from "./components/Footer/Footer";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./scenes/usersPage/Main";
import ProfilePage from "./scenes/profilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/users" element={<Main />} />
          <Route path="/user/:userId" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
