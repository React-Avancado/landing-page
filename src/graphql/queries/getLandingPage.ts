const GET_LANDING_PAGE = /* GraphQl */ `
query GET_LANDING_PAGE {
  landingPage {
    logo {
      alternativeText
      url
    }
  }
}

`

export default GET_LANDING_PAGE
