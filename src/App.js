import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Body from './components/body/Body';
import Footer from './components/Layout/Footer';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (

    <div>
      <Header/>
      <Subheader/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
