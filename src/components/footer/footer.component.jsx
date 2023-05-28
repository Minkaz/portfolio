import "./footer.styles.scss";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <Container>
                <Row>
                    <Col>
                        <div className={"footer-container"}>

                            <div className={"text-container"}>
                                <h2>Let's connect</h2>

                                <p> If you have any questions, suggestions, job offers or anything let me
                                    know. <br/> Here are some ways you can connect with me! </p>
                            </div>

                            <div className={"links-container"}>

                                <a className={"connect-link"} href="mailto:kazukauskas.mindaugas@gmail.com">Send Email:
                                    kazukauskas.mindaugas@gmail.com</a>
                                <a className={"connect-link"} href="https://linkedin.com/in/mindaugas-kažukauskas-527846228" rel="noreferrer"
                                   target="_blank">Linked in</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;