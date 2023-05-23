import './skills.styles.scss';
import {Col, Container, Row} from "react-bootstrap";
import laravelImg from "../../assets/img/laravel.png";
import angularImg from "../../assets/img/angular.png";
import reactImg from "../../assets/img/react.png";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className={"skills-container"}>
                            <h2> Skills </h2>
                            <p>Show case of the skills I have experience working in real projects.</p>
                            <p></p>

                            <div className={"items-container"}>
                                <div className={"item"}>
                                    <img src={laravelImg} alt={"laravel"}/>
                                </div>

                                <div className={"item"}>
                                    <img src={angularImg} alt={"angular"}/>
                                </div>

                                <div className={"item"}>
                                    <img src={reactImg} alt={"react"}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;