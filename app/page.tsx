import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-4 pb-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </>
  )
}
