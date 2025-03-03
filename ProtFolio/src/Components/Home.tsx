
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skils/Skils'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className=' h-screen mt-[95px]'>
        <Hero />
        <Projects />
        <Skills/>
        <Contact />
    </div>
  )
}

export default Home