import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Image
        src="./public/me.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </section>
  );
}
