import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://example.com/graphql';

export const client = new GraphQLClient(API_URL);

export interface PageData {
  landingOptions: {
    heroTitle: string;
    heroSubtitle: string;
    heroCtaText: string;
    heroBackgroundImage?: { sourceUrl: string };
    aboutTitle: string;
    aboutText: string;
    services: {
      serviceTitle: string;
      serviceDescription: string;
    }[];
  };
}