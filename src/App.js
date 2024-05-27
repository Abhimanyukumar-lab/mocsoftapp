import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './components/Home';
import PrestigiousComponent from './components/PrestigiousComponent';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import OurWork from './components/OurWork';
import People from './components/People';
import aboutus from './components/aboutus';
import Contact from './components/Contact';
import { detailedWork } from './components/detailedWork';
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/middle" exact component={PrestigiousComponent} />
          {/* <Route path="/middle" component={Middle} /> */}
          <Route path="/our-services" component={OurServices} />
          <Route path="/middle" component={PrestigiousComponent} />
          <Route path="/work" component={detailedWork} />
          <Route path="/people" component={People} />
          <Route path="/aboutus" component={aboutus} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Banner />
        <Footer />
      </>
    </Router>
  );
}
export default App;
