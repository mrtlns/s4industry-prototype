import { GraphQLClient, gql } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.s4industry.pl/graphql';

const client = new GraphQLClient(API_URL);

export async function getContactData() {
  // Pobieramy wszystko: telefony ORAZ dane do faktury (po polskich nazwach z Twojego screena)
  const query = gql`
    query GetContactData {
      pages(where: {name: "strona-glowna"}) {
        nodes {
          contactData {
            telefonGlowny
            telefonDodatkowy
            emailFirmowy
            adresBiura
            invoiceData {
              nazwaFirmy
              ulicaINumer
              kodIMiasto
              nip
              regon
            }
          }
        }
      }
    }
  `;

  try {
    const data: any = await client.request(query);
    
    // Logowanie dla pewności (zobaczysz to w terminalu)
    console.log("🔍 DANE Z WP:", JSON.stringify(data?.pages?.nodes, null, 2));

    const acf = data?.pages?.nodes?.[0]?.contactData;

    if (!acf) return null;

    return {
      // 1. Kontakt
      phoneMain: acf.telefonGlowny,
      phoneSecondary: acf.telefonDodatkowy,
      emailAddress: acf.emailFirmowy,
      officeAddress: acf.adresBiura,

      // 2. Faktura (Mapujemy polskie nazwy na angielskie dla strony)
      invoiceData: {
        companyName: acf.invoiceData?.nazwaFirmy,
        street: acf.invoiceData?.ulicaINumer,
        postcodeCity: acf.invoiceData?.kodIMiasto,
        nip: acf.invoiceData?.nip,
        regon: acf.invoiceData?.regon
      }
    };
  } catch (error) {
    console.error('🔴 BŁĄD WP:', error);
    return null;
  }
}