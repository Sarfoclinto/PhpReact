import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Compontents/Home";
import SignIn from "./Compontents/SignIn";
import SignUp from "./Compontents/SignUp";
function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-dvh">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
