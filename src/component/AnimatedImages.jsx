import { useLayoutEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CommonContent from "./common/CommonContent";
import ShadowImg from "../images/png/action_img_shadow.png";
import AnimatedImg1 from "../images/png/img-1.png";
import AnimatedImg2 from "../images/png/img-2.png";
import AnimatedImg3 from "../images/png/img-3.png";
import AnimatedImg4 from "../images/png/img-4.png";
import AnimatedImg5 from "../images/png/img-5.png";

const AnimatedImages = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".target",
        start: "top top",
        end: "+=500%",
        markers: true,
        pin: true,
      },
    });
    // 1.
    tl.set(".team-img", {
      autoAlpha: 1,
      opacity: 1,
    });
    let second = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top -50%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    // 2.
    second
      .fromTo(
        ".img_one",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".team-img",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let third = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    // 3.
    third
      .fromTo(
        ".img_two",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_one",
        {
          opacity: 0,
        },
        "-=.5"
      );
    // 4.
    let four = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    four
      .fromTo(
        ".img_three",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_two",
        {
          opacity: 0,
        },
        "-=.5"
      );
    // 5.
    let five = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_4",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    five
      .fromTo(
        ".img_four",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_three",
        {
          opacity: 0,
        },
        "-=.5"
      );
    // 6.
    let six = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_5",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    six
      .fromTo(
        ".img_five",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_four",
        {
          opacity: 0,
        },
        "-=.5"
      );
  }, []);
  return (
    <>
      <section className="bg-dark">
        <div className="action_background position-relative d-none d-xl-block index_1">
          {/* <div className="position-absolute w-100 action_top_wave">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_top_wave.png"
              alt="action_top_wave"
            />
          </div>
          <div className="position-absolute w-100 action_bottom_wave">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_bottom_wave.png"
              alt="action_bottom_wave"
            />
          </div>
          <div className="position-absolute index_minus_1">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_top_shadow.png"
              alt="action_top_shadow"
            />
          </div> */}
          {/* <div className="position-absolute end-0 bottom-0 index_minus_1">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_bottom_shadow.png"
              alt="action_bottom_shadow"
            />
          </div>
          <div className="position-absolute end-0 top-50 index_minus_1">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_side_shadow.png"
              alt="action_side_shadow"
            />
          </div>
          <div className="position-absolute end-0 action_side_shadow index_minus_1">
            <img
              className="w-100"
              src="/assets/png/actionImg/action_side_shadow.png"
              alt="action_side_shadow"
            />
          </div> */}
          <div className="col-lg-8 px-lg-4 mx-auto py-5 text-white text-center">
            <h2>Scroll Animation Images</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa,
              dolor consectetur alias eaque quas tempora deleniti, temporibus
              perspiciatis fuga dignissimos est aperiam quae animi ratione
              magnam tempore minima. Iste.
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="position-relative">
              <div className="container container-modified">
                <div className="row justify-content-center justify-content-lg-between section_1 mb-5 mb-xl-0">
                  <div className="col-xl-6 d-none d-xl-flex flex-column justify-content-center target py-4 text-center  text-white">
                    <div className="image_conatiner d-flex flex-column justify-content-center w-100 mx-auto position-relative">
                      <div className="team-img">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img"
                            src={AnimatedImg1}
                            alt="one"
                          />
                        </div>
                      </div>

                      <div className="w-100 p-4 position-absolute img_one">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img"
                            src={AnimatedImg2}
                            alt="two"
                          />
                        </div>
                      </div>

                      <div className="w-100 p-4 position-absolute img_two">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img "
                            src={AnimatedImg3}
                            alt="three"
                          />
                        </div>
                      </div>

                      <div className="w-100 p-4 position-absolute img_three">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img "
                            src={AnimatedImg4}
                            alt="four"
                          />
                        </div>
                      </div>

                      <div className="w-100  p-4 position-absolute img_four">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img "
                            src={AnimatedImg5}
                            alt="five"
                          />
                        </div>
                      </div>

                      <div className="w-100 p-4 position-absolute img_five">
                        <div className="position-absolute action_img_shadow index_minus_1">
                          <img
                            className="w-100"
                            src={ShadowImg}
                            alt="ShadowImg"
                          />
                        </div>
                        <div>
                          <img
                            className="animtion_img "
                            src={AnimatedImg1}
                            alt="six"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="01" />
                  </div>
                </div>
                <div className="row justify-content-center vh-100 justify-content-lg-end section_2 mb-5 mb-xl-0">
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="02" />
                  </div>
                </div>
                <div className="row justify-content-center vh-100 justify-content-lg-end section_3 mb-5 mb-xl-0">
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="03" />
                  </div>
                </div>
                <div className="row justify-content-center vh-100 justify-content-lg-end section_4 mb-5 mb-xl-0">
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="04" />
                  </div>
                </div>
                <div className="row justify-content-center vh-100 justify-content-lg-end section_5 mb-5 mb-xl-0">
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="05" />
                  </div>
                </div>
                <div className="row justify-content-center vh-100 justify-content-lg-end section_5 mb-5 mb-xl-0">
                  <div className="col-lg-6 col-xl-5 mt-5 mt-xl-0">
                    <CommonContent secNum="06" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedImages;
