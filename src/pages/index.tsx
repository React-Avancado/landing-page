import React from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { LandingPageProps } from 'types/api'

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

import client from 'graphql/client'
import { QUERY_SEO } from 'graphql/queries/seo'
import { QUERY_LANDING_PAGE } from 'graphql/queries/landingPage'
import { getImageUrl } from 'utils/getImageUrl'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq,
  seo
}: LandingPageProps) => {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          images: [{ url: getImageUrl(seo.ogImage.url) }]
        }}
      />
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda
        title={sectionAgenda.title}
        description={sectionAgenda.description}
      />
      <PricingBox {...pricingBox} />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(QUERY_LANDING_PAGE)
  const { seo } = await client.request(QUERY_SEO)

  return {
    props: {
      ...landingPage,
      seo
    }
  }
}

export default Index
