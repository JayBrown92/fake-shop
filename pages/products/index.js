import React from "react";
import Card from "../../components/UI/Card";
import Container from "../../components/UI/Container";

export default function products({ products }) {
  return (
    <>
      <section id="products-intro" className="mb-8 md:mb-16">
        <Container>
          <h1 className="mb-8 md:mb-16">View all of our products!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nulla incidunt fugit pariatur harum suscipit ex odit dolorem
            voluptatum natus eos accusantium odio, numquam dolores vel amet
            quisquam quis. Debitis eveniet perferendis impedit, explicabo enim
            dolorum doloribus. Illo repellat quas omnis nulla eius soluta
            reprehenderit veritatis, vel, impedit autem voluptates?
          </p>
        </Container>
      </section>

      <section id="products-list">
        <Container
          classes={"flex flex-wrap justify-between gap-y-4 md:gap-y-8"}
        >
          {products.map((product) => {
            return (
              <Card
                classes={
                  "basis-full sm:basis-[48%] lg:basis-[32%]  border-2 rounded-lg b-dark/20"
                }
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </Container>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
