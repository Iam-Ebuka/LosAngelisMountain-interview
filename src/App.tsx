import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'


function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      
      <div id='history'>
        <SecondSection />
      </div>
      <div id='team'>
        <ThirdSection />
      </div>
      <Footer />
    </>
  )
}

export default App
