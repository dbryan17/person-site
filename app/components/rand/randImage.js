"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
const imgLocations = [
  "/pictures/me/one.JPG",
  "/pictures/me/two.JPG",
  "/pictures/me/three.jpeg",
  "/pictures/me/four.jpeg",
  "/pictures/me/five.jpeg",
];

export default function RandImage() {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    let rand = Math.floor(Math.random() * imgLocations.length);

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

export const dynamic = "force-dynamic";
