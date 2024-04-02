
import ContactUs from './Pages/ContactUs.tsx';
import AboutUs from './Pages/AboutUs.tsx';
import { Routes,Route } from "react-router-dom";
import HomePage from './Pages/index.tsx';
import Layout from './components/Layout.tsx';
import Login from './Pages/Login.tsx';




const App = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login/>} />
       <Route element={<Layout/> }>
       <Route path="/" element={<HomePage/>} />
       <Route path="/About" element={<AboutUs/>} />
       <Route path="/ContactUs" element={<ContactUs/>} />
       <Route path="/login" element={<Login/>} />

       </Route>
       
    </Routes>
  );
};

export default App;
