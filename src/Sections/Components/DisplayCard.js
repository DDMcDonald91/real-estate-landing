import { Container, Card } from 'react-bootstrap'

export default function DisplayCard(props) {
  return (
    <Container style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Card style={{ maxWidth: '18rem', padding: '0', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Body id='card-body'>
            <Card.Img variant="top" src={props.image} className='img-fluid card-image' />
            </Card.Body>
        </Card>
    </Container>
  )
}
