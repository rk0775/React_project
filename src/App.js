import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import AllReviews from './components/AllReviews';
import { ToastContainer, toast } from 'react-toastify';
import AddReviwe from './components/AddReviews';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path='/all-reviews' element={<AllReviews />} exact />
          <Route path='/add-review' element={<AddReviwe/>} exact />
        </Routes>
       
      </BrowserRouter>
    </div>
   
  );
}

export default App;
