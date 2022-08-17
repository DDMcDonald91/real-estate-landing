import {Container, Row, Col} from 'react-bootstrap'
import {  AiFillFacebook, AiFillYoutube, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export default function Featured() {
  return (
    <Container className="d-flex align-items-center justify-content-center" fluid id='featured-container'>   
        <Container style={{border: 'solid white 1px', height: '90%'}} className="d-flex align-items-center justify-content-center">
            <Container style={{height: '30%', width: '60%', border: 'solid 1px beige', position: 'absolute', right: '20px' }}></Container>
            <Container style={{zIndex: '100'}}>
            <Container>
            <h2>Featured Blog: Behind the Scene</h2>
            <p>Follow us on social media for the most exclusive real estate news and photos from our amazing property listings in Beverly Hills and Los Angeles.</p>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col xs={3} className='icons'><AiFillFacebook /></Col>
                    <Col xs={3} className='icons'><AiFillInstagram /></Col>
                    <Col xs={3} className='icons'><AiFillYoutube /></Col>
                    <Col xs={3} className='icons'><AiFillLinkedin /></Col>
                </Row>
            </Container>
            </Container>
        </Container>
    </Container>
  )
}
