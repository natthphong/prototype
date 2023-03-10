
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/component/chat/Chat";
import Generate from "./pages/generate/Generate";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Result from "./pages/result/Result";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register/>} /> 
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/home" element={<Generate/>}/>
      <Route path="/result" element={<Result/>}/>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
