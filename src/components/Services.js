import Title from './Title';
import { Container, Row, Col } from 'react-bootstrap';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
];
function Services() {
  return (
    <>
      <section id='services' className='block services-block'>
        <Container fluid>
          <Title title={'Our services'} sub={'services we provide'} />
          <Row>
            {servicesData.map(ser => {
              return (
                <Col sm={4} className='holder' key={ser.id}>
                  <div className='icon'>
                    <i className={ser.icon}></i>
                  </div>
                  <h3>{ser.title}</h3>
                  <p>{ser.description}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
