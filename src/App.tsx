
import './App.css'
import BuiltTeams from './components/BuiltTeams'
import BuiltWayofWork from './components/BuiltWayofWork'
import Collaborate from './components/Collaborate'
import ConnectTools from './components/ConnectTools'
import CustomerStories from './components/CustomerStories'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TrustedUser from './components/TrustedUser/TrustedUser'
import WorkTogether from './components/WorkTogether'
import WorkWay from './components/WorkWay'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <TrustedUser/>
     <Collaborate/>
     <WorkTogether/>
     <ConnectTools/>
     <WorkWay/>
     <BuiltWayofWork/>
     <BuiltTeams/>
     <CustomerStories/>
     <Footer/>
    </>
  )
}

export default App
