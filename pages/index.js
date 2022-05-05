import Head from "next/head";
import Container from "../components/UI/Container";

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Fake Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="intro" className="mb-12 md:mb-16">
        <Container>
          <h1 className=" mb-12 md:mb-16 text-center font-bold">
            Welcome to Fake Shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            labore natus et tempora vero facere totam sed repudiandae, quidem
            asperiores ea ad beatae iusto nemo hic iste non. Unde, officiis.
            Possimus beatae corporis suscipit ad ducimus, odio culpa, sequi
            ratione optio aut doloremque expedita vitae qui ut. Culpa deserunt
            praesentium saepe earum. Id eveniet cupiditate impedit incidunt
            aspernatur voluptas in. Voluptatibus earum, unde provident totam
            quibusdam quaerat consequatur reiciendis, veniam molestias quis
            expedita omnis deleniti, a nulla ipsum ad neque culpa explicabo quas
            aperiam repellat eligendi deserunt distinctio rerum. Sint. Culpa
            natus molestiae, alias atque tenetur vel. Itaque eum corporis
            cupiditate illo odit voluptatum natus at libero eius hic vero alias
            aut quos modi, magni placeat exercitationem, vel ipsam vitae? Vitae
            esse eos, tempore quo ducimus maiores animi corporis cupiditate
            ullam qui sapiente culpa veritatis corrupti, ut provident veniam
            doloribus magnam impedit deleniti officiis, deserunt itaque commodi
            tempora repudiandae? Voluptate?
          </p>
        </Container>
      </section>
    </>
  );
}
