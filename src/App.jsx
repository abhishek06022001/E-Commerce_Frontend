import React from 'react'
import Navbar from './Components/Navbar'
import MainPage from './MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path=':id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App