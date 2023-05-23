import './banner.styles.scss';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/Handsome.png";
import {useState, useEffect} from "react";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Full stack Developer", "React Developer", "Angular Developer" , "PHP Developer"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="info-row">
                    <Col xs={12} md={6} xl={7}>
                        <div className={'banner-container'}>
                            <span>Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Mindaugas`} <span className="wrap">{text}</span></h1>
                            <p>
                                I develop full stack applications using php/C# for backend and React/Angular for FE.
                                I love what I do and I am always looking to improve.
                            </p>

                            {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img className={'profile-picture'} src={headerImg} alt="Header Img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
