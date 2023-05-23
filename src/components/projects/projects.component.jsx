import "./projects.styles.scss";
import {Col, Container, Row} from "react-bootstrap";
import clothesShopImg from "../../assets/img/clothes-shop.png";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className={"projects-container"}>
                            <h2> Projects </h2>   {/*https://genuine-halva-66fafb.netlify.app/*/}
                            <p>Some examples of the projects I have worked on before</p>



                            <div className={"items-container"}>
                                <div className={"item"}>
                                    <img src={clothesShopImg} alt={"clothes-shop"}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;