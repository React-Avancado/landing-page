export type LogoProps = {
  logo: {
    url: string
    alternativeText: string
  }
}

export type HeaderProps = {
  header: {
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
}

export type SectionAboutProjectProps = {
  sectionAboutProject: {
    title: string
    description: string
    image: {
      alternativeText: string
      url: string
    }
  }
}

type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  sectionTech: {
    title: string
    techIcon: TechIcon[]
  }
}

export type LandingPage = {
  landingPage: LogoProps &
    HeaderProps &
    SectionAboutProjectProps &
    SectionTechProps
}
