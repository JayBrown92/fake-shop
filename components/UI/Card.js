import { useState } from "react";
import Image from "next/image";

export default function Card({ classes, image, title, price, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={classes}>
      <Image src={image} alt={`${title}`} width={291} height={291} />

      <div className="p-4">
        <h2 classes={"font-bold"}>{title}</h2>
        <h3 className="font-italic">£{price}</h3>
        <p>{description}</p>
        <button
          className=" font-bold cursor-pointer py-2.5  "
          onClick={handleShowModal}
        >
          View more
        </button>
      </div>
      <div
        className={`flex absolute w-full h-full justify-center content-center hidden ${
          showModal ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
}
