import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Story from './components/Story'
import Itinerary from './components/Itinerary'
import Destination from './components/Destination'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Story />
        <Itinerary />
        <Destination />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </>
  )
}

export default App
