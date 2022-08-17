import { Container, Button, Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <Container fluid id='contact-section' className="d-flex align-items-center justify-content-center">
        <Container id='contact'>
            <Container className='contact-col' md={6} style={{background: 'black', color: 'white', padding: '15px', maxWidth: '50rem'}}>
                <Container>
                    <h2>Work with us</h2>
                    <br />
                    <Container>
                        <p>We offer the highest level of expertise, service, and integrity. Sara Lee Real Estate is the leading luxury real estate agent in the Beverly Hills area and has helped hundreds of buyers find beautiful homes and mansions in Beverly Hills and Los Angeles, resulting in almost $7 Billion of closed residential real estate transactions in the last 20 years.</p>
                    </Container>
                    <Container id='contact-container'>
                <Container style={{width: '90%'}}>
                    <Form id='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                </Container>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}
