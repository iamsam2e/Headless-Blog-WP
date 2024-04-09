import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* Title */}
      <h3 className="text-4md md:text-8xl font-bold tracking-tighter leading-tight text-center md:text-left md:pr-8">
        Sam Toohey
      </h3>

      {/* Tagline */}
      {/* Image of yourself */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image src="/me.jpeg" alt="Your Name" width={150} height={150} />
        </div>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Headless, Developer{" "}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        {""} Evangelist.
      </h4>
    </section>
  );
}
