import Router from 'preact-router'
import { useEffect } from 'react'
import { Description } from '../../modules/resources/components/description'
import { PrivacityAndSecurity } from '../../modules/resources/components/Priv&Sec'
import { ResourceCard } from '../../modules/resources/components/resource-card'

import Pdf from './pdf/pdf'

const Resources = () => {
  useEffect(() => {
    document.title = 'Recursos - loadept'
    const metaDescription = document.querySelector("meta[name='description']")
    const metaOgDescription = document.querySelector("meta[property='og:description']")
    if (metaDescription && metaOgDescription) {
      metaDescription.setAttribute("content", "Encuentra herramientas gratuitas, opensource y fáciles de usar.")
      metaOgDescription.setAttribute("content", "Encuentra herramientas gratuitas, opensource y fáciles de usar.")
    }
  }, [])

  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="space-y-8">
        <Description />
        <ResourceCard />
        <PrivacityAndSecurity />
      </div>
    </div>
  )
}

const ResourcesRouter = () => {
  return (
    <Router>
      <Resources path="/resources" />
      <Pdf path="/resources/pdf" />
    </Router>
  )
}

export default ResourcesRouter
