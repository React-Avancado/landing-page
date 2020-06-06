import React from 'react'
import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'

const Index = () => (
  <>
    <SectionHero />
    <SectionAboutProject />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
  </>
)

export default Index
