import './App.css'
import {  Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Location from './Pages/Location/Location'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contacts from './Pages/Contacts/Contacts'
import NavBar from './Components/Navbar/Navbar'
import Join from './Pages/Register/Register'
import FreeTrial from './Pages/Free-Trial/FreeTrial'
import PrimeHeader from './Components/PrimeHeader/Primeheader'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
    {/* <PrimeHeader/> */}
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/location" element={<Location/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/freetrial" element={<FreeTrial/>} />
      <Route path="/join" element={<Join/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
