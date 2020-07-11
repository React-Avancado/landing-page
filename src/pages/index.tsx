import React from 'react'
import { GetStaticProps } from 'next'

import { LandingPageProps } from 'types/api'

import { request } from 'graphql-request'
import { getLandingPage } from 'queries/getLandingPage'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  sectionAboutUs,
  sectionReviews,
  sectionFaq
}: LandingPageProps) => {
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda
        title={sectionAgenda.title}
        description={sectionAgenda.description}
      />
      <PricingBox />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await request(
    'http://localhost:1337/graphql',
    getLandingPage
  )

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
