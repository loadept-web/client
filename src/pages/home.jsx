import { useEffect } from 'preact/hooks'
import { Categories } from '../modules/home/components/categories'
import { Intro } from '../modules/home/components/intro'

const Home = () => {
  useEffect(() => {
    document.title = 'Inicio - loadept'
    const metaDescription = document.querySelector("meta[name='description']")
    const metaOgDescription = document.querySelector("meta[property='og:description']")
    if (metaDescription && metaOgDescription) {
      metaDescription.setAttribute("content",
        `Blog de programación donde comparto mis notas, proyectos y documentación técnica. Exploraciones en desarrollo, soluciones a problemas y guías prácticas que me sirvieron y quizá también te ayuden.`
      )
      metaOgDescription.setAttribute("content",
        `Blog de programación donde comparto mis notas, proyectos y documentación técnica. Exploraciones en desarrollo, soluciones a problemas y guías prácticas que me sirvieron y quizá también te ayuden.`
      )
    }
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <Intro />
      <Categories />
    </div>
  )
}

export default Home
