import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductItem from './components/ProductItem';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductItem/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )}

export default App
