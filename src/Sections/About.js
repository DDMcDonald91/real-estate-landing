import { Container, Row, Col } from 'react-bootstrap'
import DisplayCard from './Components/DisplayCard'


export default function About() {
  return (
    <Container id='about-container'>
        <h1>Explore Black Estates Realty</h1>
        <Row>
            <Col sm={12} md={3}><DisplayCard /></Col>
            <Col sm={12} md={3}><DisplayCard /></Col>
            <Col sm={12} md={3}><DisplayCard /></Col>
            <Col sm={12} md={3}><DisplayCard /></Col>
        </Row>
    </Container>
  )
}
