import { Container, Row, Col, Image } from 'react-bootstrap'
import  agent  from '.././Images/agent.jpg'

export default function Agent() {
  return (
    <Container id='agent-container about'>
        <Container>
        <Row className='agent-container-row'> 
            <Col sm={12} md={6} className='d-flex align-items-center justify-content-center'>
                <Container>
                    <h1>Introducing your premeire agent.</h1>
                    <br />
                    <h2>Sara Lee</h2>
                    <br />
                    <p>With almost $7 Billion in sales, Jade Mills has developed a global reputation as the top Los Angeles & Beverly Hills real estate agent. Due to her agency's expertise in the Beverly Hills real estate market and her integrity, loyalty, and professionalism, Jade is sought out by A-list celebrities, tech founders, and business leaders. Jade is frequently featured as a luxury real estate expert on national media and appears as a keynote speaker at real estate conferences around the globe.</p>
                </Container>
            </Col>
            <Col sm={12} md={6} style={{padding: '0'}}>
                <Container style={{padding: '0'}}>
                    <Image src={agent} className='img-fluid' />
                </Container>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}
