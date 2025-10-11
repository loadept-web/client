import { useContext, useEffect } from 'preact/hooks'
import { BackArrow } from '../core/icons'
import { MainContent } from '../modules/article/components/main-content'
import { useContent } from '../modules/article/hooks/useContent'
import { DataContext } from '../core/providers/dataContext'

const Article = ({ category, name }) => {
  const { content, meta } = useContent({ category, name })
  const { data } = useContext(DataContext)

  useEffect(() => {
    document.title = `${name} - loadept`
  }, [])

  return (
    <div className='container mx-auto px-4 max-w-3xl mb-20'>
      <BackArrow text='Volver al inicio' href='/' />
      <MainContent content={content} meta={meta} repo_url={data} />
    </div>
  )
}

export default Article
