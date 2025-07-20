import Capacitacao from "../components/pt/Capacitation"
import ContactForm from "../components/pt/ContactForm"
import DocumentationSection from "../components/pt/DocumentationSection"
import Emprego from "../components/pt/Emprego"
import Footer from "../components/pt/Footer"
import HeroSection from "../components/pt/HeroSection"
import HeroWrapper from "../components/pt/HeroWrapper"
import MoradiaTransporte from "../components/pt/MoradiaTransporte"

const Pt = () => {

  return (
    <>
      <HeroSection />
      <HeroWrapper />
      <DocumentationSection />
      <Capacitacao />
      <Emprego />
      <MoradiaTransporte />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Pt