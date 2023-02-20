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

          <div className="row align-items-start justify-content-between position-relative   roadmap_parent my-5">
            <div className="ms-auto ms-lg-0 col-10 col-lg-5 bg-primary text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5  bg-danger text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5 bg-primary text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5  bg-danger text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5 bg-primary text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5  bg-danger text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5 bg-primary text-white p-3 m-3">
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
            <div className="ms-auto ms-lg-0 col-10 col-lg-5  bg-danger text-white p-3 m-3">
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

            <div className="position-absolute roadmap_line_parent"></div>
            <div className="position-absolute roadmap_line_1"></div>
          </div>

          <p className="fw-seibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            provident minus non magnam, sit odit labore veniam repellat
            blanditiis qui corrupti vel consequuntur inventore nostrum, enim
            corporis esse. Maiores quas saepe nobis nulla numquam dolores
            impedit dolor molestias officiis. Provident deserunt repellat
            distinctio voluptatibus itaque modi, architecto magni nemo dolorem
            doloremque error sint, maxime dicta praesentium autem, iusto facere
            nostrum exercitationem sunt ipsam harum. Corporis nisi iusto vero
            harum ratione pariatur quos voluptatem qui accusantium nihil nulla
            sequi, eveniet molestias soluta. Nihil fugiat doloribus consequatur
            totam omnis dolorum accusantium quae doloremque accusamus? Harum
            nisi quidem architecto modi praesentium atque iste consequatur
            asperiores cum a labore voluptatem corrupti, odit veritatis quisquam
            numquam eum ad. Minima, unde nemo alias dolore rerum libero vero ut
            ullam placeat ratione fuga possimus laborum dignissimos. Ipsum ad,
            similique minus quo deserunt, quia quasi sit consequuntur quae
            assumenda vero perspiciatis laboriosam? Dolore iure iste neque
            error! Iste, voluptatibus. Blanditiis facere soluta mollitia
            veritatis fugit ullam, odit aut et error perspiciatis eaque nam enim
            dolorem unde magni facilis? Nobis labore libero, dolor nemo illo
            officia. Qui dolorem, rerum ad, sequi autem debitis dolorum soluta
            tempora fugiat quod sunt laudantium corporis quam, quas at quae.
            Odit rem velit rerum facilis. Nihil totam earum fuga, nobis ipsum
            cumque laborum minus ullam ipsa? Possimus perferendis porro fuga
            suscipit iusto exercitationem voluptatem cum ab voluptas unde alias
            facere doloribus quos, ipsam quaerat eligendi similique labore
            incidunt illo! Voluptas, laudantium nostrum doloremque repudiandae
            ea error tempora illo atque impedit hic, minus minima unde magni
            odit omnis quo suscipit soluta reiciendis quas esse alias velit
            nesciunt eveniet. Eaque atque quaerat quod tempore suscipit
            consectetur inventore dignissimos numquam. Labore cumque, eaque qui
            consequuntur assumenda quae eveniet amet quia necessitatibus
            aspernatur, fuga, illo dolorem atque explicabo voluptatum
            repellendus reprehenderit? Doloremque consectetur veritatis quisquam
            eaque alias assumenda, eius accusamus amet vitae laborum! Dolorem
            corrupti porro illo animi itaque voluptatibus quae laboriosam dolore
            tempora? Dolores adipisci at eveniet repellat laboriosam molestiae
            debitis mollitia sit qui? Esse dolorum, molestiae tenetur, fuga quod
            cupiditate quo illo provident obcaecati illum totam quidem
            voluptatibus quas, iusto sint fugit? Nulla magni, velit cum labore
            veniam iure ducimus quo nemo minima voluptas atque! Saepe, sequi.
            Amet fuga ea, vero doloribus magni debitis odit beatae fugiat
            officia pariatur vel nisi corporis cum commodi facilis laudantium
            nesciunt earum non ducimus iusto id dignissimos? Expedita dolor
            reiciendis, nemo labore fugiat suscipit ipsum. Blanditiis asperiores
            facere similique doloremque saepe delectus eligendi unde architecto
            esse vero id, cupiditate inventore, vel quos quas neque dolorum
            corporis, aperiam laborum suscipit ipsam expedita cumque quidem! Sed
            impedit aliquid quia reiciendis tempora inventore molestiae ea
            beatae obcaecati similique, hic ipsam ipsum maiores illum? Vel ipsam
            voluptatem commodi, labore dolores eius dolorem quaerat voluptate
            nobis ad possimus quisquam quos deleniti magnam architecto rerum
            aperiam! Perspiciatis quis quod ut recusandae fugit sint laudantium
            reprehenderit culpa similique nulla et iure illum dignissimos
            voluptates error commodi iste libero voluptas, dolores saepe eveniet
            totam eligendi deserunt a. Veniam error facilis eos neque voluptate,
            unde ex dicta et magni!
          </p>
        </div>
      </section>
    </>
  );
};

export default GsapRoadmap;
