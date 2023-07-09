import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import img1 from '../assets/images/img1.jpg';
import Title from './Title';
function About() {
  const html = 90;
  const responsive = 80;
  const react = 80;
  return (
    <section id='about' className='block about-block'>
      <Container fluid>
        <Title title={'About Us'} sub={'slearn more about us'} />

        <Row>
          <Col sm={6}>
            <Image src={img1} fluid />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate autem voluptatibus, repellat est quos animi dolorum
              sint aperiam iure placeat blanditiis totam tenetur odit aliquid
              corporis ipsum rem amet. Est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate autem voluptatibus, repellat est quos animi dolorum
              sint aperiam iure placeat blanditiis totam tenetur odit aliquid
              corporis ipsum rem amet. Est.
            </p>
            <div className='progress-block'>
              <h4>HTML/CSS/JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>RESPONSIVE</h4>
              <ProgressBar
                variant='success'
                now={responsive}
                label={`${responsive}%`}
              />
            </div>
            <div className='progress-block'>
              <h4>REACT</h4>
              <ProgressBar variant='info' now={react} label={`${react}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
