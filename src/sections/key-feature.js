/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Speed,
    altText: 'Fast',
    title: 'Fast Deliveries',
    text:
      'Our delivery platform takes time and distance into account to ensure your order is assigned to the best possible rider or dispatch agent, for the fastest possible delivery.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Secure',
    title: 'Secure Payment Processing',
    text:
      'There are plenty of payment options on the DeliveryNow platform, and all digital transactions carried out through the platform are secured by PCI DSS.',
  },
  {
    id: 3,
    imgSrc: Vector,
    altText: 'Efficient',
    title: 'Great Service Quality',
    text:
      'Our delivery platform is the go-to app to deliver whatever you want anywhere you want it. We deliver anything from your favourite stores to your desired location, in minutes!',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Delivery. Now. Anywhere"
          title="More than just a service!"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
