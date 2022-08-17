import { Container, Card } from 'react-bootstrap'
import  hero  from '../../Images/hero.jpg'

export default function DisplayCard() {
  return (
    <Container style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Card style={{ maxWidth: '18rem', padding: '0', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Body id='card-body'>
            <Card.Img variant="top" src={hero} className='img-fluid card-image' />
            </Card.Body>
        </Card>
    </Container>
  )
}
