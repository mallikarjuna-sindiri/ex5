import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import StudentDetails from './components/StudentDetails'
import Scholarship from './components/Scholarship'
import Payment from './components/Payment'
import CGPA from './components/CGPA'
import UploadMaterial from './components/UploadMaterial'
import CheckMaterial from './components/CheckMaterial'
import Balance from './components/Balance'
import Transfer from './components/Transfer'
import Profile from './components/Profile'
import Invoice from './components/Invoice'

function App() {
  const [materials, setMaterials] = useState([]) // State to store uploaded materials
  const [balance, setBalance] = useState(1000) // State to store user balance
  const [user] = useState({ name: 'MALLIKARJUNA', email: 'mallikarjuna.sindiri@gmail.com', phone: '6281268002' }) // User info

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cgpa" element={<CGPA />} />
          <Route
            path="/upload-material"
            element={<UploadMaterial materials={materials} setMaterials={setMaterials} />}
          />
          <Route
            path="/check-material"
            element={<CheckMaterial materials={materials} />}
          />
          <Route path="/balance" element={<Balance balance={balance} />} />
          <Route path="/transfer" element={<Transfer balance={balance} setBalance={setBalance} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App