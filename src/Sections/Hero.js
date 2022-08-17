import { Container } from "react-bootstrap";

export default function Hero() {
  return (
    <Container fluid id="hero-container" className="d-flex align-items-center justify-content-center">
        <Container>
            <p>#1 Agent in the area.</p>
            <h1>Welcome home.</h1>
        </Container>
    </Container>
  )
}
