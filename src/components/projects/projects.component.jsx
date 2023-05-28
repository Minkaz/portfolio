import "./projects.styles.scss";
import {Col, Container, Row} from "react-bootstrap";
import wip from "../../assets/img/wip.jpg";
import shop1 from "../../assets/img/project-img2.png";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className={"projects-container"}>
                            <div className={"text-container"}>
                                <h2> Projects </h2>
                                <p>
                                    Most projects are from companies I work for so I won't be able to show them <br/>
                                    So here are some examples of personal projects I have worked on before
                                </p>
                            </div>

                            <div className={"cards"}>
                                <a href={"https://genuine-halva-66fafb.netlify.app/"} rel="noreferrer" target="_blank">
                                    <div className={"card"}>
                                        <div className={"card-content"}>
                                            <img src={shop1} alt={"E-shop prototype"}/>
                                            <h4>E-SHOP PROTOTYPE</h4>
                                        </div>

                                    </div>
                                </a>

                                <a href={"#"}>
                                    <div className={"card"}>
                                        <div className={"card-content"}>
                                            <img src={wip} alt={"work in progress"}/>
                                            <h4>WORK IN PROGRESS</h4>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;