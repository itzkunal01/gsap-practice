import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const GsapSlider = () => {
  let sections1 = gsap.utils.toArray(".block1 > div");
  let sections2 = gsap.utils.toArray(".block2 > div");

  let slider = gsap.timeline({
    scrollTrigger: {
      trigger: ".slider-parent",
      // start: "top top",
      // end: "bottom top",
      // markers: true,
    },
  });

  slider.to(".block1", {
    scrollTrigger: {
      trigger: ".block1",
      start: "top 85vh",
      toggleActions: "play none none reset",
      xPercent: 0,
      scrub: 5,
      markers: false,
    },
    xPercent: 100,
    duration: 5,
  });
  slider.to(".block2", {
    scrollTrigger: {
      trigger: ".block2",
      start: "top 85vh",
      toggleActions: "play none none reset",
      xPercent: 0,
      scrub: 5,
      markers: true,
    },
    xPercent: 100,
    duration: 5,
  });

  return (
    <>
      <div className="container py-5">
        <p className="fw-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          provident minus non magnam, sit odit labore veniam repellat blanditiis
          qui corrupti vel consequuntur inventore nostrum, enim corporis esse.
          Maiores quas saepe nobis nulla numquam dolores impedit dolor molestias
          officiis. Provident deserunt repellat distinctio voluptatibus itaque
          modi, architecto magni nemo dolorem doloremque error sint, maxime
          dicta praesentium autem, iusto facere nostrum exercitationem sunt
          ipsam harum. Corporis nisi iusto vero harum ratione pariatur quos
          voluptatem qui accusantium nihil nulla sequi, eveniet molestias
          soluta. Nihil fugiat doloribus consequatur totam omnis dolorum
          accusantium quae doloremque accusamus? Harum nisi quidem architecto
          modi praesentium atque iste consequatur asperiores cum a labore
          voluptatem corrupti, odit veritatis quisquam numquam eum ad. Minima,
          unde nemo alias dolore rerum libero vero ut ullam placeat ratione fuga
          possimus laborum dignissimos.
        </p>
      </div>

      <div className="overflow-hidden vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="slider-parent d-flex align-items-center justify-content-center py-5 my-5">
          <div>
            <div className="d-flex block1">
              <div className="c1 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c2 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c3 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c1 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c2 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c3 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
            </div>
            <div className="d-flex block2 mt-4">
              <div className="c1 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c2 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c3 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c1 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c2 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
              <div className="c3 p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ab aperiam quo facere veritatis harum in veniam
                numquam. Explicabo, ab.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <p className="fw-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          provident minus non magnam, sit odit labore veniam repellat blanditiis
          qui corrupti vel consequuntur inventore nostrum, enim corporis esse.
          Maiores quas saepe nobis nulla numquam dolores impedit dolor molestias
          officiis. Provident deserunt repellat distinctio voluptatibus itaque
          modi, architecto magni nemo dolorem doloremque error sint, maxime
          dicta praesentium autem, iusto facere nostrum exercitationem sunt
          ipsam harum. Corporis nisi iusto vero harum ratione pariatur quos
          voluptatem qui accusantium nihil nulla sequi, eveniet molestias
          soluta. Nihil fugiat doloribus consequatur totam omnis dolorum
          accusantium quae doloremque accusamus? Harum nisi quidem architecto
          modi praesentium atque iste consequatur asperiores cum a labore
          voluptatem corrupti, odit veritatis quisquam numquam eum ad. Minima,
          unde nemo alias dolore rerum libero vero ut ullam placeat ratione fuga
          possimus laborum dignissimos. Ipsum ad, similique minus quo deserunt,
          quia quasi sit consequuntur quae assumenda vero perspiciatis
          laboriosam? Dolore iure iste neque error! Iste, voluptatibus.
          Blanditiis facere soluta mollitia veritatis fugit ullam, odit aut et
          error perspiciatis eaque nam enim dolorem unde magni facilis? Nobis
          labore libero, dolor nemo illo officia. Qui dolorem, rerum ad, sequi
          autem debitis dolorum soluta tempora fugiat quod sunt laudantium
          corporis quam, quas at quae. Odit rem velit rerum facilis. Nihil totam
          earum fuga, nobis ipsum cumque laborum minus ullam ipsa? Possimus
          perferendis porro fuga suscipit iusto exercitationem voluptatem cum ab
          voluptas unde alias facere doloribus quos, ipsam quaerat eligendi
          similique labore incidunt illo! Voluptas, laudantium nostrum
          doloremque repudiandae ea error tempora illo atque impedit hic, minus
          minima unde magni odit omnis quo suscipit soluta reiciendis quas esse
          alias velit nesciunt eveniet. Eaque atque quaerat quod tempore
          suscipit consectetur inventore dignissimos numquam. Labore cumque,
          eaque qui consequuntur assumenda quae eveniet amet quia necessitatibus
          aspernatur, fuga, illo dolorem atque explicabo voluptatum repellendus
          reprehenderit? Doloremque consectetur veritatis quisquam eaque alias
          assumenda, eius accusamus amet vitae laborum! Dolorem corrupti porro
          illo animi itaque voluptatibus quae laboriosam dolore tempora? Dolores
          adipisci at eveniet repellat laboriosam molestiae debitis mollitia sit
          qui? Esse dolorum, molestiae tenetur, fuga quod cupiditate quo illo
          provident obcaecati illum totam quidem voluptatibus quas, iusto sint
          fugit? Nulla magni, velit cum labore veniam iure ducimus quo nemo
          minima voluptas atque! Saepe, sequi. Amet fuga ea, vero doloribus
          magni debitis odit beatae fugiat officia pariatur vel nisi corporis
          cum commodi facilis laudantium nesciunt earum non ducimus iusto id
          dignissimos? Expedita dolor reiciendis, nemo labore fugiat suscipit
          ipsum. Blanditiis asperiores facere similique doloremque saepe
          delectus eligendi unde architecto esse vero id, cupiditate inventore,
          vel quos quas neque dolorum corporis, aperiam laborum suscipit ipsam
          expedita cumque quidem! Sed impedit aliquid quia reiciendis tempora
          inventore molestiae ea beatae obcaecati similique, hic ipsam ipsum
          maiores illum? Vel ipsam voluptatem commodi, labore dolores eius
          dolorem quaerat voluptate nobis ad possimus quisquam quos deleniti
          magnam architecto rerum aperiam! Perspiciatis quis quod ut recusandae
          fugit sint laudantium reprehenderit culpa similique nulla et iure
          illum dignissimos voluptates error commodi iste libero voluptas,
          dolores saepe eveniet totam eligendi deserunt a. Veniam error facilis
          eos neque voluptate, unde ex dicta et magni!
        </p>
      </div>
    </>
  );
};

export default GsapSlider;
