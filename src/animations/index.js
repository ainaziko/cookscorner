import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.045,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.0225,
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 0.675,
      delay: 0.45,
      y: 70,
      skewY: 10,
      stagger: 0.18,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 0.45,
      y: 70,
      skewY: -20,
      stagger: 0.09,
      ease: "Power3.easeOut",
    })
    .to(".landing", {
      duration: 0.0225,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.045,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 0.45,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.675,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=0.9"
    )
    .from(".landing__main .text", {
      duration: 0.9,
      y: 10,
      opacity: 0,
      stagger: {
        amount: 0.9,
      },
      ease: "power3.easeInOut",
    })
    .from(".links .item", {
      duration: 0.225,
      opacity: 0,
      delay: window.innerWidth < 763 ? -1.35 : -0.27,
      stagger: {
        amount: 0.225,
      },
      ease: "expo.easeOut",
      onComplete: animateMainShape(),
    })
    .from(".main-circle", {
      duration: 0.45,
      opacity: 0,
      ease: "power3.easeInOut",
      onComplete: animateShapes(),
    })
    .from(".shapes .shape", {
      duration: 0.45,
      opacity: 0,
      delay: -0.45,
      ease: "power3.easeInOut",
      stagger: 0.45,
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.045,
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.045,
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.045,
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.045,
      delay: 0.135,
      css: { fill: "#ffffff" },
    })
    .to(
      [".nav-secondary", ".nav-primary"],
      {
        duration: 0.36,
        height: "100%",
        transformOrigin: "right top",
        stagger: {
          amount: 0.045,
        },
        ease: "power3.inOut",
      },
      "-=0.225"
    )
    .from(
      ".nav-link",
      {
        duration: 0.225,
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.225,
        },
        ease: "Power3.in",
      },
      "-=0.135"
    );
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.0225,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.36,
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.045,
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.045,
      delay: -0.135,
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.225,
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.0225,
      css: { display: "none" },
    });
};

export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 0.45,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 0.45,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .shape", {
      duration: 1.8,
      rotate: 360,
      delay: -0.45,
      ease: "power3.easeInOut",
      stagger: 0.9,
    })
    .to(".shapes .shape-3", {
      duration: 0.45,
      rotate: 360,
      delay: -0.9,
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 1.35,
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 0.45,
    })
    .to(".shapes .shape", {
      duration: 0.45,
      opacity: 0,
      delay: -0.45,
      ease: "power3.easeInOut",
      stagger: 0.45,
    })
    .to(".shapes .shape", {
      duration: 0.675,
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 0.45,
    });
};

const animateMainShape = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 1.215,
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 1.215,
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 0.81,
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 1,
      })
      .from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.0675,
        opacity: 0,
        y: 30,
        stagger: 0.045,
        ease: "Power3.easeOut",
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector(".link"), {
      duration: 0,
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 0.405,
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 0.225,
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};
