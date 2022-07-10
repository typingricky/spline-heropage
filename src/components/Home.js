import React from "react";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Spline from '@splinetool/react-spline';
import Email from '../images/email.svg'

function SplineApp() {
  return (
    <Spline scene="https://prod.spline.design/ErxrdSpLniiPrYre/scene.splinecode" />
  );
}

function ParticleBackground() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles 
      id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options = {{
        "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "options": {
                "sides": 5
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 600,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#000",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
        }}}
    />
  )
}

const Home = () => {
  return (
    <>
      {/* <ParticleBackground/> */}
      
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
      />

    <section id="home">
      <div className="text-white grid grid-cols-[35% 50%] text-base">
        <div className="absolute right-0 top-[-96px]">
          <SplineApp className="m-0 flex flex-col gap-20 lg:scale-y-75 lg:translate-y-48"/>
        </div>
        <div className="relative">
          <div className="ml-24 mr-8">
            <div class="mt-96"></div>
            <strong className="">Olá, me chamo.</strong>
            <h1 className="font-play-fair font-bold text-7xl m-0 max-w-lg lg:text-7xl lg:max-w-sm">Ricardo</h1>
            <p className="font-normal leading-5 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at modi libero neque doloremque qui ratione, ab ad quidem corporis quae, rem laboriosam nostrum, consequatur commodi possimus nihil voluptatibus magnam.</p>
            <button className="contato-button"><img src={Email} alt="Contato" className="w-5 h-5" fill="none"/>Me Contate</button>
            <div class="mb-96"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home