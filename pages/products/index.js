import React from "react";

export default function products() {
  return (
    <>
      <h1>View all of our products!</h1>
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
