import Header from '@/app/components/header'
import About from '@/app/components/About'
import Projects from '@/app/components/projects'
import WhyUs from '@/app/components/why-us'
import Contact from '@/app/components/contact'
import Technologies from './components/Techs'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Services />
      <WhyUs />
      <Contact />
    </>
  )
}