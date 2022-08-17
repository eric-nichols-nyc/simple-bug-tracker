import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login';

const AppRouter = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Login/>} />
 </Routes>
 </BrowserRouter>
 )
}

export default AppRouter