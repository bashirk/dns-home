/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Tracking',
    title: 'Live Order Tracking',
    text:
      'A close integration of the Google Maps system into the DeliveryNow platform ensures that you know the exact location of your order at any given time.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Pickup',
    title: 'Self Pickup Option',
    text:
      'With our Self Pickup option, you are assured of skipping the lines at your favourite store while also skipping delivery fees.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Orders',
    title: 'Multiple Orders',
    text:
      'The multiple orders functionality allows you to make any amount of orders you do wish to make, with this, you can make an order for any of your friends at a distant location to yours.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Account Customization',
    text:
      'As the de-facto ruler of your world, you can make numerous customizations on your account as you see fit. Now, that\'s a good reason to use an avatar on your profile',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Alerts',
    title: 'Powerful Alerts System',
    text:
      'With our in-app alerts and notifications system, you are rest assured of not missing any updates about your order.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      'Need help? Our world-class customer service team is available 24/7. You can get started at: support@deliverynow.com.ng',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Freedom meets convenience!"
          title="DeliveryNow Service is your one-stop spot for convenience"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
