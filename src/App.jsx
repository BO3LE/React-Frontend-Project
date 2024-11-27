import NavBar from "./Comits/NavBar";
import FooterBar from "./Comits/FooterBar";
import Home from "./ALL Pages/HomePage/Home";
import About from "./ALL Pages/AboutPage/About";
import Product from "./ALL Pages/ProductPage/Product";
import Rej from "./ALL Pages/Rejest/Rej";


import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
          <div className="ContantPages">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/product" component={Product}/>
              <Route path="/rejest" component={Rej}/>
            </Switch>
          </div>
        <FooterBar/>
      </div>
    </Router>
    
  );
}

export default App
