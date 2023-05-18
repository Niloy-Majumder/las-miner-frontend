import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Body from "./components/body/Body";
import Footer from "./components/Layout/Footer";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/Section/About";
import Query from "./components/Section/Query";
import Faq from "./components/Section/Faq";

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Header />
      <Subheader />
      {/* <Routes>  
          <Route path="/)" element={<Body />} />
          <Route path="/about)" element={<About />} />
          <Route path="/query)" element={<Query />} />
          <Route path="/faq)" element={<Faq />} />
          <Route path="/contact)" element={<Contact />} />
        </Routes> */}
      <Footer />
    </div>
    // </BrowserRouter>

    // <div>
    //   <Header />
    //   <Subheader />
    //   <Body />
    //   <Footer />
    // </div>
  );
}

export default App;
