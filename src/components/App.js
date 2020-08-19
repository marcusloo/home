import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.state = {
            type_animation: true,
            animation_removed: false,
        };
    }

    stopAnimation() {
        this.setState({
            type_animation: false,
            animation_removed: true,
        });
    }

    render() {
        return (
            <Router>
                <div className="home">
                    <ParticleComponent />
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + "/about"}>
                            <About />
                        </Route>
                        <Route path={process.env.PUBLIC_URL + "/"}>
                            <HomePage {...this.state} stopAnimation={this.stopAnimation} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
