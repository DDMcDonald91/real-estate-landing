import {Container, Card} from 'react-bootstrap'

export default function PressCard(props) {
  return (
    <Container>
        <Card style={{ maxWidth: '18rem', border: 'none', margin: '0 auto' }}>
      <Card.Body style={{margin: 'auto auto'}}>
        <Card.Text><h4>{props.comment}</h4></Card.Text>
        <Card.Text style={{ textTransform: 'uppercase' }}>- {props.author}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}
