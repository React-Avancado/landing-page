import React from 'react'
import { GetStaticProps } from 'next'

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

const Index = ({ landingPage: { logo } }) => {
  return (
    <>
      <SectionHero logo={logo} />
      <SectionAboutProject />
      <SectionTech />
      <SectionConcepts />
      <SectionModules />
      <SectionAgenda />
      <PricingBox />
      <SectionAboutUs />
      <SectionReviews />
      <SectionFaq />
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
      landingPage
    }
  }
}

export default Index