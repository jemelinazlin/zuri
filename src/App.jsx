import About from './assets/components/AboutUs';
import Cart from './assets/components/Cart';
import Footer from './assets/components/Footer';
import NavigationBar from './assets/components/NavigationBar';
import Wishlist from './assets/components/WishList';
import CatalogPage from './assets/pages/CatalogPage';
import Contact from './assets/pages/Contact';
import Home from './assets/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="app">
        <NavigationBar /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/catalog/:category" element={<CatalogPage />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
