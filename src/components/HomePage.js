import React from "react";
import "./HomePage.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        if (this.props.type_animation) {
            const options = {
                strings: [
                    "Hello!^500 I am <strong>Marcus Loo</strong>. ^500I am currently a Machine Learning Grad Student at Georgia Tech.",
                ],
                typeSpeed: 40,
                onComplete: this.props.stopAnimation,
            };
            this.typed = new Typed(this.intro, options);
        }
    }

    componentWillMount() {
        if (this.typed) {
            this.typed.destroy();
        }
    }

    render() {
        return (
            <div className="homeMain">
                <div className="intro">
                    <span
                        ref={(e) => {
                            this.intro = e;
                        }}
                    />
                </div>
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
