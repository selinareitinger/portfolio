import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Traveling from "./Traveling.jsx";
import AboutMe from "./AboutMe.jsx";
import Rome from "./Rome.jsx";
import Amsterdam from "./Amsterdam.jsx";
import SaoMiguel from "./SaoMiguel.jsx";

function App() {

  return (
  <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/traveling" element={<Traveling />} />
      <Route path="/amsterdam" element={<Amsterdam />} />
      <Route path="/rome" element={<Rome />} />
      <Route path="/sao_miguel" element={<SaoMiguel />} />
    </Routes>
    <Footer></Footer>

  </>
  )
}

export default App
