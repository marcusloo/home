import React from "react";
import "./HomePage.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.png";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.endAnimation = this.endAnimation.bind(this);
        this.changeCollapse = this.changeCollapse.bind(this);
        this.state = {
            to_expand: true,
        };
    }

    componentDidMount() {
        if (this.props.type_animation) {
            const options = {
                strings: [
                    "<strong>Marcus Loo</strong>. ^500 Machine Learning Grad Student at Georgia Tech.",
                ],
                typeSpeed: 10,
                onComplete: this.endAnimation,
            };
            this.typed = new Typed(this.intro, options);
        }
    }

    endAnimation() {
        if (!this.props.animation_removed) {
            this.typed.destroy();
        }
        this.props.stopAnimation();
    }

    componentWillUnmount() {
        if (this.typed) {
            this.typed.destroy();
        }
    }

    animationCompleteHandler() {
        console.log(this.props);
        this.props.stopAnimation();
    }

    introAnimation() {
        if (this.props.type_animation) {
            return (
                <span
                    ref={(e) => {
                        this.intro = e;
                    }}
                />
            );
        } else {
            return (
                <span>
                    <strong>Marcus Loo</strong>. Machine Learning Grad Student at Georgia Tech.
                </span>
            );
        }
    }

    card() {
        return (
            <UncontrolledCollapse toggler="#toggler">
                <Card
                    className="aboutCard"
                    style={{ backgroundColor: "#282c34", borderColor: "#282c34" }}
                >
                    <CardBody className="cardText">
                        I am a Master student at Georgia Tech currently doing Reinforcement
                        Learning/Robotics research under Professor Sehoon Ha. My current focus is on
                        Learning from Demonstrations and Active Learning. I am also interested in
                        web development and backend engineering.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        );
    }

    changeCollapse() {
        this.setState({ to_expand: !this.state.to_expand });
    }

    render() {
        return (
            <div className="main">
                <div className="homeMain">
                    <div className={this.props.type_animation ? "nothing" : "headerLinks"}>
                        <a href="https://github.com/mloo3">
                            <img src={github} width="30" height="30" className="icons" />
                        </a>
                        <a href="https://www.linkedin.com/in/marcusloo/">
                            <img src={linkedin} width="30" height="30" className="icons" />
                        </a>
                        <Link to="/resume">
                            <img src={resume} width="30" height="30" className="icons" />
                        </Link>
                    </div>
                    <div className="intro">{this.introAnimation()}</div>
                    <div
                        id="toggler"
                        className={this.props.type_animation ? "nothing" : "aboutMe"}
                        onClick={this.changeCollapse}
                    >
                        {this.state.to_expand ? "more info" : "less info"}
                    </div>
                    {this.card()}
                </div>
                {/* <div className={this.props.type_animation ? "nothing" : "projectHome"}>
                    <h1 className="projectTitle">Projects</h1>
                </div>
                <div className={this.props.type_animation ? "nothing" : "otherHome"}>
                    <h1 classname="moreLinks">More Links</h1>
                </div> */}
            </div>
        );
    }
}

export default HomePage;
// export { Home, About };
