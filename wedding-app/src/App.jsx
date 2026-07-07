import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Story from './components/Story'
import Itinerary from './components/Itinerary'
import Travels from './components/Travels'
import ImportantInformationFaq from './components/ImportantInformationFaq'
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
        {/* <Story /> */}
        <Itinerary />
        <Travels />
        <ImportantInformationFaq />
        <Gallery />
        {/* <RSVP /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
