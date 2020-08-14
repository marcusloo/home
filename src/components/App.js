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
        };
    }

    stopAnimation() {
        this.setState({
            type_animation: false,
        });
    }

    // render() {
    //     return (
    //         <Router>
    //             <div className="home">
    //                 <ParticleComponent />
    //                 <Switch>
    //                     <Route path="/about">
    //                         <About />
    //                     </Route>
    //                     <Route path="/">
    //                         <HomePage
    //                             type_animation={this.state.type_animation}
    //                             stopAnimation={this.stopAnimation}
    //                         />
    //                     </Route>
    //                 </Switch>
    //             </div>
    //         </Router>
    //     );
    // }

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
