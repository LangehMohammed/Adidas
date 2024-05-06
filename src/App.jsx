import './App.css'
import Nav from "./Components/NavigationBar/Navigation"
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Opinion from "./Components/Opinion/Opinion"
import Promotion from "./Components/Promotion/Promotion";
import Footer from "./Components/Footer/Footer";
import Arrivals from "./Components/NewArrivals/Arrivals";
import Brand from "./Components/Brand/Brand";
import Popular from "./Components/Popular/Popular";
import Support from "./Components/Support/Support";
import Feedback from "./Components/Feedback/Feedback"


function App() {
  return (
    <>
      <Feedback/>
      <Nav/>
      <Main/>
      <Arrivals/>
      <Brand/>
      <Popular/>
      <About/>
      <Opinion/>
      <Promotion/>
      <Support/>
      <Footer/>
    </>
  )
}

export default App
