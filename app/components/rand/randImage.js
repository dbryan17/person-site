"use client";
import { useEffect, useState } from "react";
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
      <img src={currentImage} />
    </figure>
  );
}
