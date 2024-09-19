import Image from "next/image";
import Gallery from "./gallery";

export const myArray = ["/pictures/melody1.jpg","/pictures/melody2.jpg","/pictures/threat.jpg"];

export default function Home() {
  return (
    <main>
      <Gallery myArray={myArray}/>
    </main>
  );
}