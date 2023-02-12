import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/signin" element={<Signin />} /> */}
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
