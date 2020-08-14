import React from "react";
import Particles from "react-particles-js";

function ParticleComponent() {
    return (
        <Particles
            params={{
                background: {
                    color: {
                        value: "#282c34",
                    },
                },
                particles: {
                    number: {
                        value: 50,
                    },
                    size: {
                        value: 3,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                },
            }}
        />
    );
}

export default ParticleComponent;
