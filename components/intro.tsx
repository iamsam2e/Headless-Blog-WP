import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* Title */}

      {/* Tagline */}
      {/* Image of yourself */}
      <div className="flex justify-center mb-4">
        <div className="w-100 h-100 rounded-full overflow-hidden">
          <Image src="/me.jpeg" alt="Your Name" width={300} height={300} />
        </div>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        I have worked with WordPress for over 8 years, I'm a Theme Developer and
        Headless Consultant, I muck around with NodeJS. React Native & {""}{" "}
        anything else that catches my eye.
        {""} I drink copius amounts of coffee and I'm a Linux Fanboy current
        running a mix of PopOS and Kubuntu
      </h4>
    </section>
  );
}
