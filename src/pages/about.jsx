import { ContactSection } from '../modules/about/components/contact-section'
import { Interests } from '../modules/about/components/interests'
import { Experience } from '../modules/about/components/experience'
import { Description } from '../modules/about/components/description'
import { useEffect } from 'preact/hooks'

const About = () => {
  useEffect(() => {
    document.title = 'Sobre mi - loadept'
    const metaDescription = document.querySelector("meta[name='description']")
    const metaOgDescription = document.querySelector("meta[property='og:description']")
    if (metaDescription && metaOgDescription) {
      metaDescription.setAttribute("content",
        `Conoce un poco más sobre mí, quién está detrás de loadept, mi experiencia y mis intereses en el desarrollo de software y la tecnología.`
      )
      metaOgDescription.setAttribute("content",
        `Conoce un poco más sobre mí, quién está detrás de loadept, mi experiencia y mis intereses en el desarrollo de software y la tecnología.`
      )
    }
  }, [])

  return (
    <div className='container mx-auto px-4 max-w-3xl mb-20'>
      <div className='space-y-16'>
        <Description />
        <Experience />
        <Interests />
        <ContactSection />
      </div>
    </div>
  )
}

export default About
