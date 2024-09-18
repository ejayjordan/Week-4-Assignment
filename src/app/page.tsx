import Image from "next/image";
import Gallery from "./gallery";

export default function Home() {
  const images = ["melody1.jpg","melody2.jpg","threat.jpg"];
  return (
    <main>
      <Gallery images={images}/>
    </main>
  );
}
