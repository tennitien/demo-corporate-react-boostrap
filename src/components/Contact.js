import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Title from './Title';

const Contact = () => {
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
        <Title title={'contact'} sub={'get connected with us'} />
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Your name</Form.Label>
                <Form.Control type='email' placeholder='Enter your name' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='nEnter your email' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Contact message</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Col>
          <Col sm={6}>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416692!2d106.80047917454182!3d10.870008889284476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1688838858909!5m2!1sen!2s'
              width='600'
              height='450'
              loading='lazy'
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
