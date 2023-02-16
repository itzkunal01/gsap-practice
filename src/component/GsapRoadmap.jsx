import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const GsapRoadmap = () => {
  let roadmap = gsap.timeline({
    scrollTrigger: {
      trigger: ".roadmap_parent",
      start: "top top",
      end: "bottom top",
      markers: false,
      scrub: 1,
      //   pin: true,
      //   pinSpacer: true,
      //   immediateRender: false,
    },
  });
  roadmap.fromTo(
    ".roadmap_line_1",
    {
      height: 0,
    },
    {
      height: "100%",
    }
  );

  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row bg-success  text-center text-white py-5">
            <div className="col-12">
              <h1>WELCOME TO GSAP</h1>
              <h2>SCROLLTRIGGER ROADMAP</h2>
            </div>
            <div className="col-12 my-4">
              <h5 className="px-sm-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                quos ducimus voluptatem enim laboriosam facere nihil debitis
                obcaecati sapiente dolores, veniam eaque, minus excepturi
                consectetur amet hic facilis odit cumque velit. Nobis sit dolor
                quibusdam omnis illum hic, amet aliquam.
              </h5>
            </div>
          </div>

          <div className="row align-items-start justify-content-between position-relative   roadmap_parent">
            <div className="col-12 col-lg-5 bg-primary text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5  bg-danger text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5 bg-primary text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5  bg-danger text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5 bg-primary text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5  bg-danger text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5 bg-primary text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>
            <div className="col-12 col-lg-5  bg-danger text-white p-3 m-3">
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur aut suscipit nobis quisquam quis quidem
                fugit asperiores deserunt rerum qui aliquid dolore modi illo
                porro, quas, cum voluptatum aperiam sint earum sed ratione?
                Velit, neque quidem quia deserunt, saepe unde quos earum minima
                itaque doloribus quo amet quod dolorem fugiat consequuntur. Quae
                ratione quam vitae praesentium ea cumque autem libero! Voluptate
                repellendus magni error exercitationem officiis laboriosam
                quisquam ducimus voluptatum sunt unde veritatis minus ratione
                laborum alias libero architecto necessitatibus laudantium
                adipisci, in quasi quam? Odit fuga obcaecati a eaque dolor
                molestiae qui corrupti! Quasi pariatur possimus deserunt odio!
              </p>
            </div>

            {/* <div className="position-absolute roadmap_line_parent"> */}
            <div className="position-absolute roadmap_line_1"></div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default GsapRoadmap;
