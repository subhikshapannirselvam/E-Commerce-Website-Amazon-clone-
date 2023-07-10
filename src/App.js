import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Carousel from './Carousel';
import Header from './Header';
import HomePage from './HomePage';
import Login from './Login';
import Checkout from './CheckoutPage';
import Payment from './Payment';
function App() {
  
  
  return (
 
    <Router>
      <div className="App" >
        <Header />
        <Routes> 
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/payment" element={<Payment/>}/>
        
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
