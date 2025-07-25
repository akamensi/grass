
import { Route, Routes } from 'react-router'
import './App.css'
import './App.css'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import AddProperty from './components/AddProperty'
import PropertyDetails from './components/PropertyDetails'
import MakeOffer from './components/MakeOffer'
import Leads from './components/Leads'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/make-offer" element={<MakeOffer />} />
      <Route path="/leads" element={<Leads />} />
    </Routes>
      
    </>
  )
}

export default App
