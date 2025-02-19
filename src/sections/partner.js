/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const data = {
  subTitle: 'Become a partner!',
  title: 'We are always looking for new partners to help us on our mission',
  description:
    'With the DeliveryNow Service Partner program, you can help in the fulfillment of orders from users within your city. We are interested in people and businesses with a ride or fleet of their own.',
  btnName: 'Get Started',
  btnURL: 'mailto:partnerships@deliverynow.com.ng',
};

export default function PartnerSection() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "partner.png" }) {
        childImageSharp {
          fluid(maxWidth: 665) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
        </Box>
      </Container>
    </section>
  );
}
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    px: [0, null, '40px', 0],
    width: ['100%', null, null, 360, 550, 655, null, 765],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
