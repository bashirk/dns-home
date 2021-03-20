/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'I need to cancel or change my order! How can I do this?',
    contents: (
      <div>
        Please give us a call as soon as possible, we can let the restaurant know before it starts preparing your order. If you would like to cancel your order after it has been confirmed with the restaurant, please call our support team so that we can check if the restaurant has begun preparation. If the restaurant has begun preparing the food, we will be unable to issue a full refund for the order. With regards to any refund of a payment you have made online, it will be added to your wallet. This will be used to pay for future orders you make. please contact DeliveryNow (Whatsapp @+234701517163)  and not the restaurant if you need further details.
      </div>
    ),
  },
  {
    title: 'How long does it take for my order to get delivered?',
    contents: (
      <div>
        Delivery time varies from restaurant to restaurant. It also depends on the number 
        of orders that the restaurant has to prepare and on the distance between the 
        restaurant and your delivery address. You can see the estimated delivery 
        time for each restaurant in your area on our website. After placing an 
        order, a more precise delivery time will be communicated to you on 
        your dashboard. In addition to this, you can track the location of 
        the delivery agent from time to time on the map.
      </div>
    ),
  },
  {
    title: `How can I pay for my order?`,
    contents: (
      <div>
        We accept online payments. In addition, there are various online payment methods available. 
        You can check which payment methods are available on our platform by going to the 
        ‘Select your payment method’ button on the ITEMS IN CART page.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          slogan="Get answers to possible questions you might have"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
