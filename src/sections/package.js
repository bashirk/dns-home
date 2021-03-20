/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'TakeOut Services',
    description: 'What you get from other platforms;',
    //buttonText: 'Port now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Access to stores, and item offerings from these stores',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Seamless payment processing for your ordered items',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Real-time updates on your orders',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Self Pickup option',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Order delivery within 30 minutes or less',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'DeliveryNow Service',
    description: 'What you get from us;',
    //priceWithUnit: '$29.99/',
    //buttonText: 'Get the app',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Access to stores, and item offerings from these stores',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Seamless payment processing for your ordered items',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Real-time updates on your orders',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Self Pickup option',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Order delivery within 30 minutes or less',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Let’s see how DeliveryNow compares"
          slogan="Why us?"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
