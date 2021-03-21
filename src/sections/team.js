/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import CEO from 'assets/team/ceo.jpg';
import CTO from 'assets/team/cto.jpg';
import CFO from 'assets/team/cfo.jpg';

const data = [
    {
      id: 1,
      imgSrc: CEO,
      altText: 'CEO',
      title: 'Team Member',
      text:
        'Member Role',
    },
    {
      id: 2,
      imgSrc: CTO,
      altText: 'CTO',
      title: 'Team Member',
      text:
        'Member Role',
    },
    {
      id: 3,
      imgSrc: CFO,
      altText: 'CFO',
      title: 'Team Member',
      text:
        'Member Role',
    },
    {
      id: 4,
      imgSrc: CFO,
      altText: 'CMO',
      title: 'Team Member',
      text:
        'Member Role',
    },
    {
      id: 5,
      imgSrc: CFO,
      altText: 'CFO',
      title: 'Team Member',
      text:
        'Member Role',
    },
    {
      id: 6,
      imgSrc: CFO,
      altText: 'CFO',
      title: 'Team Member',
      text:
        'Member Role',
    },
  ];

export default function Team() {
    return (
      <section sx={{ variant: 'section.team' }} id="team">
        <Container>
          <SectionHeader
            slogan="The DeliveryNow Team"
            title="Meet the team powering the DeliveryNow mission!"
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
  