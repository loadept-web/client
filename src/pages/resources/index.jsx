import Router from 'preact-router'
import { Description } from '../../modules/resources/components/description'
import { PrivacityAndSecurity } from '../../modules/resources/components/Priv&Sec'
import { ResourceCard } from '../../modules/resources/components/resource-card'

import Pdf from './pdf/pdf'

const Resources = () => {
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
