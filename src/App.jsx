import './App.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import items from './assets/data.js'
import { useState } from 'react';

function App() {
const [showModal, setShowModal] = useState(false)

const handleOpenModal = () => {
  setShowModal(true);
}
  return (
    <div className="app">
        <Header />
        <Products items={items} />
        <Footer />
    </div>
  )
}

export default App
