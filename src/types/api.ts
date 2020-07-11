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

export type Author = {
  name: string
  title: string
  photo: Photo
  socialNetwork: SocialNetwork[]
  description: string
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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionAboutUs: SectionAboutUsProps
}
