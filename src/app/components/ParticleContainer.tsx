"use client"
import { useCallback } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-particles"
import { loadFull } from "tsparticles" // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim" // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function ParticleContainer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
    // await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        // background: {
        //   color: {
        //     value: "#000000",
        //   },
        //   image: "",
        //   position: "50% 50%",
        //   repeat: "no-repeat",
        //   size: "cover",
        //   opacity: 1,
        // },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        backgroundMode: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        fpsLimit: 60,
        infection: {
          cure: false,
          delay: 0,
          enable: false,
          infections: 0,
          stages: [],
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 150,
              links: {
                blink: false,
                consent: false,
                opacity: 0.6,
              },
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            // trail: {
            //   delay: 1,
            //   quantity: 1,
            //   particles: {
            //     bounce: {
            //       horizontal: {
            //         random: {},
            //       },
            //       vertical: {
            //         random: {},
            //       },
            //     },
            //     collisions: {
            //       bounce: {
            //         horizontal: {
            //           random: {},
            //         },
            //         vertical: {
            //           random: {},
            //         },
            //       },
            //     },
            //     color: {
            //       animation: {},
            //     },
            //     life: {
            //       delay: {
            //         random: {},
            //       },
            //       duration: {
            //         random: {},
            //       },
            //     },
            //     links: {
            //       shadow: {},
            //       triangles: {},
            //     },
            //     move: {
            //       angle: {},
            //       attract: {
            //         rotate: {},
            //       },
            //       gravity: {},
            //       noise: {
            //         delay: {
            //           random: {},
            //         },
            //       },
            //       outModes: {},
            //       trail: {},
            //     },
            //     number: {
            //       density: {},
            //     },
            //     opacity: {
            //       animation: {},
            //       random: {},
            //     },
            //     rotate: {
            //       animation: {},
            //     },
            //     shadow: {
            //       offset: {},
            //     },
            //     shape: {},
            //     size: {
            //       animation: {},
            //       random: {},
            //     },
            //     stroke: {
            //       color: {
            //         value: "",
            //         animation: {
            //           enable: false,
            //           speed: 0,
            //           sync: false,
            //         },
            //       },
            //     },
            //     // twinkle: {
            //     //   lines: {},
            //     //   particles: {},
            //     // },
            //   },
            // },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: false,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
          },
          color: {
            value: "#666",

            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          links: {
            blink: false,
            color: {
              value: "#ffffff",
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 1,
            opacity: 0.2,
            shadow: {
              blur: true,
              color: {
                value: "#00ff00",
              },
              enable: false,
            },
            triangles: {
              enable: true,
              frequency: 1,
              opacity: 0.01,
            },
            width: 1,
            warp: false,
          },
          move: {
            angle: {
              offset: 45,
              value: 90,
            },
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "none",
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50,
            },
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 6,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 80,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 0.5,
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 3,
              sync: false,
            },
          },
          reduceDuplicates: false,
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {
              polygon: {
                sides: 5,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 3,
            animation: {
              destroy: "none",
              enable: false,
              minimumValue: 0.1,
              speed: 20,
              startValue: "max",
              sync: false,
            },
          },
          stroke: {
            width: 0,
            color: {
              value: "",
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
            },
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: true,
        themes: [],
      }}
    />
  )
}
