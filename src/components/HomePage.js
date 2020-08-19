import React from "react";
import "./HomePage.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.type_animation) {
            const options = {
                strings: [
                    "Hello!^500 I am <strong>Marcus Loo</strong>. ^500I am currently a Machine Learning Grad Student at Georgia Tech.",
                ],
                typeSpeed: 10,
                onComplete: () => {
                    if (!this.props.animation_removed) {
                        this.typed.destroy();
                    }
                    this.props.stopAnimation();
                },
            };
            this.typed = new Typed(this.intro, options);
        }
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
                    Hello! I am <strong>Marcus Loo</strong>. I am currently a Machine Learning Grad
                    Student at Georgia Tech.
                </span>
            );
        }
    }

    render() {
        return (
            <div className="homeMain">
                <div className="intro">{this.introAnimation()}</div>
                <Link
                    className={this.props.type_animation ? "nothing" : "aboutMe"}
                    to={process.env.PUBLIC_URL + "/about"}
                >
                    more info
                </Link>
            </div>
        );
    }
}

export default HomePage;
// export { Home, About };
