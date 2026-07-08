import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WeddingDetails from './components/WeddingDetails.jsx'
import Story from './components/Story.jsx'
import Gallery from './components/Gallery.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulated load time so the entrance animation has room to breathe.
    // Swap for real asset-loading logic later if needed.
    const timer = setTimeout(() => setIsLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <Navbar />

      <main>
        <Hero />
        <WeddingDetails />
       <Story />
        <Gallery />
        {/* <RSVP /> */}
      </main>

      <Footer />
    </>
  )
}

export default App
