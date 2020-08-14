import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.state = {
            type_animation: true,
        };
    }

    stopAnimation() {
        this.setState({
            type_animation: false,
        });
    }

    render() {
        return (
            <Router>
                <div className="home">
                    <ParticleComponent />
                    <Switch>
                        {/* <Route path="/about">
                            <About />
                        </Route> */}
                        <Route path="/">
                            <HomePage
                                type_animation={this.state.type_animation}
                                stopAnimation={this.stopAnimation}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
