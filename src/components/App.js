import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Project from "./Project";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import blockchain_pdf from "../assets/pdfs/BLOCKCHAIN_PROOF_OF_WORK.pdf";
import persuasive_pdf from "../assets/pdfs/multimodal_persuasiveness.pdf";
import resume_pfd from "../assets/pdfs/resume.pdf";

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
                    <Route exact path={process.env.PUBLIC_URL + "/"}>
                        <HomePage {...this.state} stopAnimation={this.stopAnimation} />
                    </Route>
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/projects/:name"}
                        component={Project}
                    ></Route>
                    <Route exact path={process.env.PUBLIC_URL + "/resume"}>
                        <div className="pdfs">
                            {resume_pfd && <iframe src={resume_pfd} width="100%" height="100%" />}
                        </div>
                    </Route>
                    <Route exact path={process.env.PUBLIC_URL + "/blockchain_proof_of_work"}>
                        <div className="pdfs">
                            {blockchain_pdf && (
                                <iframe src={blockchain_pdf} width="100%" height="100%" />
                            )}
                        </div>
                    </Route>
                    <Route exact path={process.env.PUBLIC_URL + "/multimodel_persuasiveness"}>
                        <div className="pdfs">
                            {persuasive_pdf && (
                                <iframe src={persuasive_pdf} width="100%" height="100%" />
                            )}
                        </div>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
