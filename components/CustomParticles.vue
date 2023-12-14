<template>
  <ParticlesComponent
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="option1"
  />
</template>  

<script setup>
import { loadFull } from "tsparticles";
import { ParticlesComponent } from "vue3-particles";

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const option1 = ref({
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 144,
  fullScreen: {
    enable: true,
    zIndex: -0,
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 300,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      grab: {
        distance: 150,
        duration: 2,
        quantity: 8
      },
    },
  },
  particles: {
    color: {
      value: "#11edcc",
    },
    links: {
      color: "#11edcc",
      distance: 200,
      enable: true,
      opacity: 1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 3,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 69,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: false,
});

</script>