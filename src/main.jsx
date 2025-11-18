import './index.css'
import { render } from 'preact'
import Router from 'preact-router'
import { Header } from './core/components/header'
import { Footer } from './core/components/footer'
import { DataProvider } from './core/providers/context'
import {
  NotFound,
  Home,
  About,
  Article,
} from './pages'
import ResourcesRouter from './pages/resources'

const Main = () => {
  return (
    <DataProvider>
      <Header />
      <main className='flex-grow mt-12'>
        <Router>
          <Home path='/' element={<Home />} />
          <About path='/about' element={<About />} />
          <Article path='/articles/:category/:name' />
          <ResourcesRouter path='/:rest' />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </DataProvider>
  )
}

render(<Main />, document.getElementById('root'))
