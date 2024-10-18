import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/gmail.png";
import navIcon1 from "../assets/img/gmail.png";
import navIcon2 from "../assets/img/icons8-github-50.png";
import navIcon3 from "../assets/img/icons8-github-48.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <p>Thanks for stopping by! 
          
          
            </p>

        </Row>
      </Container>
    </footer>
  )
}
