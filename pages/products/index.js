import { useState } from "react";
import { useRouter } from "next/router";
import Card from "../../components/UI/Card";
import Container from "../../components/UI/Container";
import { FilterIcon } from "@heroicons/react/solid";

const filterResultDesc = "";

export default function products({ products }) {
  const [sortDesc, setSortDesc] = useState(false);
  const router = useRouter();

  const handleFilter = () => {
    setSortDesc(!sortDesc);

    if (sortDesc) {
      filterResultDesc = "?sort=desc";
    } else {
      filterResultDesc = "";
    }
  };

  return (
    <>
      <section id="products-intro" className="mb-8 md:mb-16">
        <Container classes={"relative"}>
          <h1 className="mb-8 md:mb-16">View all of our products!</h1>
          <FilterIcon
            className="h-5 w-5 text-black cursor-pointer"
            onClick={handleFilter}
          />
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
          classes={"flex flex-wrap justify-between  gap-y-4 md:gap-y-8"}
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

export async function getStaticProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products${filterResultDesc}`
  );

  console.log(res);

  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
