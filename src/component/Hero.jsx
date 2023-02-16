import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import logo from "../logo.svg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".box_parent",
      start: "top 50%",
      end: "bottom top",
      markers: false,
      scrub: 1,
      //   pin: true,
      //   pinSpacer: true,
      //   immediateRender: false,
    },
  });
  hero
    .fromTo(
      ".div_1",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )
    .fromTo(
      ".div_2",
      {
        scale: 5,
      },
      {
        scale: 1,
      }
    )
    .fromTo(
      ".div_3",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )
    .fromTo(
      ".div_4",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )
    .fromTo(
      ".text_1",
      {
        fontSize: "20px",
      },
      {
        fontSize: "40px",
      }
    );
  let vbn = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent_11",
      start: "top top",
      end: "bottom top",
      markers: false,
      //   scrub: 1,
      //   pin: true,
      //   pinSpacer: true,
      //   immediateRender: false,
    },
  });
  vbn.fromTo(
    ".box",
    {
      rotate: 0,
      xPercent: 0,
    },
    {
      rotate: 360,
      xPercent: 100,
    }
  );
  return (
    <div>
      <div className="vh-100 bg-danger"></div>
      <div className="box_parent bg-warning">
        <div className="d-flex justify-content-between">
          <div className="box_1 div_1 m-4"></div>
          <div className="box_1 div_2 m-4"></div>
          <div className="box_1 div_3 m-4"></div>
          <div className="box_1 div_4 m-4"></div>
        </div>
      </div>
      <div className="parent_1">
        <p className="text_1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          illum soluta id ipsa nam ex nisi officiis corrupti placeat
          exercitationem. Voluptas eum, adipisci voluptate nisi impedit vero rem
          eligendi accusantium.
        </p>
      </div>
      <div className="vh-100 bg-primary"></div>
      <div className="py-5 parent_11">
        <div className="box"></div>
      </div>
      <div className="vh-100 bg-warning"></div>
      <div className="vh-100 bg-success"></div>
      <div className="vh-100 bg-dark"></div>
    </div>
  );
};

export default Hero;
