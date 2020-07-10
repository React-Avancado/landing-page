export const getLandingPage = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAbout on LandingPage {
    sectionAbout {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title

      techIcon {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concept {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      module {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
      pricingBox {
        totalPrice
        numberInstallments
        priceInstallment
        benefits
        buttonLabel
        buttonUrl
      }
    }
  }

  fragment sectionAuthors on LandingPage {
    sectionAuthors {
      title
      authors {
        photo {
          url
        }
        name
        title
        socialNetwork {
          title
          url
        }
        description
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      review {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      question {
        question
        answer
      }
    }
  }

  query LandingPage {
    landingPage {
      ...logo
      ...header
      ...sectionAbout
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...sectionAuthors
      ...sectionReviews
      ...sectionFaq
    }
  }
`
