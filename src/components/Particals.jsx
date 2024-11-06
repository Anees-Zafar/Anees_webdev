import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./particals.css";
function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: false,
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: { push: { quantity: 10 }, repulse: { distance: 50, duration: 0.4 } },
                },
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#C0C0C0" }, // Single color
                    shape: { type: "circle" },
                    opacity: { value: 1 },
                    size: { value: 4, random: true },
                    line_linked: { enable: true, distance: 150, color: "#C0C0C0", opacity: 1, width: 0.1 },
                    move: { enable: true, speed: 1, direction: "none", random: false, out_mode: "out" },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticlesBackground;
