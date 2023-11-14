import Hero from '../_components/_slices/Hero'
import DataJourney from '../_components/DataJourney'
import TechnologyPartners from '../_components/TechnologyPartners'
import ExploreFeatures from '../_components/ExploreFeatures'
import UseCases from '../_components/UseCases'
import Testimonials from '../_components/Testimonials'
import GetStarted from '../_components/GetStarted'
import QuestionsAnswered from '../_components/QuestionsAnswered'

const Proxy = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero variation={1} />
      <DataJourney />
      <TechnologyPartners />
      <ExploreFeatures />
      <UseCases />
      <Testimonials />
      <GetStarted />
      <QuestionsAnswered />
    </main>
  )
}

export default Proxy