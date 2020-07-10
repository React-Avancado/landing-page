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

export type LandingPage = {
  landingPage: LogoProps & HeaderProps
}
