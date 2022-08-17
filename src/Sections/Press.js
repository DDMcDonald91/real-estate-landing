import {Container, Row, Col} from 'react-bootstrap'
import PressCard from './Components/PressCard'

export default function Press() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
        <Container id='news'>
            <h2>Latest Press, News and Media</h2>
            <Row>
                <Col md={12} lg={4} style={{padding: '0', margin: 'auto auto'}}><PressCard comment={'Sara Lee Sells Coachella Valley Home for $42 Million'} author={'Wall Street Journal'} /></Col>
                <Col md={12} lg={4} style={{padding: '0', margin: 'auto auto'}}><PressCard comment={'In her more-than-three-decade career, Lee has racked up more than $3 billion in sales, consistently ranking as one of the top producers in the country'} author={'Hollywood Reporter'} /></Col>
                <Col md={12} lg={4} style={{padding: '0', margin: 'auto auto'}}><PressCard comment={'Sara Lee inducted into the Inman Golden I Hall of Fame.'} author={'Inman News'} /></Col>
            </Row>
        </Container>
    </Container>
  )
}
