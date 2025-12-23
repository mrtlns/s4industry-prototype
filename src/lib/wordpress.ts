import { GraphQLClient, gql } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.s4industry.pl/graphql';

const client = new GraphQLClient(API_URL);

export async function getContactData() {
  const query = gql`
    query GetHomePageData {
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
            # 👇 POPRAWKA: Dodajemy 'node' przed 'sourceUrl'
            foto1 { node { sourceUrl } }
            foto2 { node { sourceUrl } }
            foto3 { node { sourceUrl } }
            foto4 { node { sourceUrl } }
            foto5 { node { sourceUrl } }
            foto6 { node { sourceUrl } }
            foto7 { node { sourceUrl } }
            foto8 { node { sourceUrl } }
          }
        }
      }
    }
  `;

  try {
    const data: any = await client.request(query);
    const acf = data?.pages?.nodes?.[0]?.contactData;

    if (!acf) return null;

    // 👇 POPRAWKA: Tutaj też wchodzimy głębiej (acf.foto1.node.sourceUrl)
    const galleryImages = [
      acf.foto1?.node?.sourceUrl,
      acf.foto2?.node?.sourceUrl,
      acf.foto3?.node?.sourceUrl,
      acf.foto4?.node?.sourceUrl,
      acf.foto5?.node?.sourceUrl,
      acf.foto6?.node?.sourceUrl,
      acf.foto7?.node?.sourceUrl,
      acf.foto8?.node?.sourceUrl,
    ].filter(url => url); // Usuwamy puste, jeśli wgrałeś np. tylko 3 zdjęcia

    return {
      phoneMain: acf.telefonGlowny,
      phoneSecondary: acf.telefonDodatkowy,
      emailAddress: acf.emailFirmowy,
      officeAddress: acf.adresBiura,
      invoiceData: {
        companyName: acf.invoiceData?.nazwaFirmy,
        street: acf.invoiceData?.ulicaINumer,
        postcodeCity: acf.invoiceData?.kodIMiasto,
        nip: acf.invoiceData?.nip,
        regon: acf.invoiceData?.regon
      },
      gallery: galleryImages
    };
  } catch (error) {
    console.error('🔴 BŁĄD WP:', error);
    return null;
  }
}