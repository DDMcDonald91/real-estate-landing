import { Container, Row, Col } from 'react-bootstrap'
import DisplayCard from './Components/DisplayCard'
import house8 from '../Images/house8.jpg'
import house6 from '../Images/house6.jpg'
import house7 from '../Images/house4.jpg'


export default function About() {
  return (
    <Container id='about-container'>
        <h1>Explore Black Estates Realty</h1>
        <p>Learn more about the best agent in the area!</p>
        <Row>
            <Col sm={12} md={4}><DisplayCard image={house8} /></Col>
            <Col sm={12} md={4}><DisplayCard image={house7}/></Col>
            <Col sm={12} md={4}><DisplayCard image={house6}/></Col>
        </Row>
    </Container>
  )
}
