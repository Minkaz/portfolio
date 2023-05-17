import './banner.styles.css';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/Handsome.png";
const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="info-row">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Mindaugas`} <span >Web Developer</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img src={headerImg} alt="Header Img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
