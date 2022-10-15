import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Loader from "react-loaders";
function App() {
  return (
    <div className="App">
      <div className='container-layout'>
        <Header/>
      </div>
      <Home/>
      <Footer/>
      <Loader type="pacman"/>
    </div>
  );
}

export default App;
