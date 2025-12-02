import { gql } from 'graphql-request';

export const GET_LANDING_PAGE = gql`
  query GetLandingPage {
    landingOptions {
      heroTitle
      heroSubtitle
      heroCtaText
      heroBackgroundImage {
        sourceUrl
      }
      aboutTitle
      aboutText
      services {
        serviceTitle
        serviceDescription
      }
    }
  }
`;