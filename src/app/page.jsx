import { SliceZone } from '@prismicio/react'
import { createClient } from "../prismicio";
import { components } from '../slices'

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Hero variation={0} /> */}
      <SliceZone slices={page.data.slices} components={components} />
      {/* <DataJourney />
      <TechnologyPartners />
      <ExploreFeatures />
      <UseCases />
      <Testimonials />
      <GetStarted />
      <QuestionsAnswered /> */}
    </main>
  )
} 
