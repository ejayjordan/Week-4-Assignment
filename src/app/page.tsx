import Image from "next/image";
import Gallery from "./gallery";

export default function Home() {
  let image = ["melody1.jpg","melody2.jpg","threat.jpg"]
  return (
    <main>
      <Gallery>
        {image}
      </Gallery>
    </main>
  );
}
