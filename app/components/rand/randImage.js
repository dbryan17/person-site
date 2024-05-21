"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
const imgLocations = [
  "/pictures/me/one.JPG",
  "/pictures/me/two.JPG",
  "/pictures/me/three.jpeg",
];

export default function RandImage() {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    let rand = Math.floor(Math.random() * imgLocations.length);
    console.log(rand);

    setCurrentImage(imgLocations[rand]);
  }, []);

  return (
    <figure className="image image-float-right" id="cody-face">
      {currentImage ? (
        <Image
          src={currentImage}
          width={200}
          height={200}
          alt="picture of me"
        />
      ) : (
        ""
      )}
    </figure>
  );
}
