export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

type Module = {
  title: string
  subtitle: string
  description: string
}

type Price = {
  totalPrice: string
  numberInstallments: string
  benefits: string
  buttonLabel: string
  buttonUrl: string
}

type Photo = {
  url: string
}

type SocialNetwork = {
  title: string
  url: string
}

type Author = {
  name: string
  title: string
  photo: Photo
  socialNetwork: SocialNetwork[]
  description: string
}

type Review = {
  name: string
  text: string
  photo: Photo
}

type Question = {
  question: string
  answer: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
  pricingBox: Price
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type SeoProps = {
  title: string
  description: string
  favicon: Photo
  ogImage: Photo
}

export type LandingPageProps = {
  seo: SeoProps
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
