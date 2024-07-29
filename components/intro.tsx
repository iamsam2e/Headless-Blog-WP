import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import Nav from "./navigation";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex justify-center mb-4">
        <div className="w-100 h-100 rounded-full overflow-hidden">
          <Image src="/me.jpeg" alt="Your Name" width={300} height={300} />
        </div>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        I have worked with WordPress for over 8 years, I'm a Theme Developer and
        Headless Consultant, I muck around with NodeJS. React Native & {""}{" "}
        anything else that catches my eye.
        {""} I drink copius amounts of coffee and I'm a technology enthusiast
        using a mix of MacOS and Linux on the daily
      </h4>
      <div className="flex justify-center mb-4">
        <div className="w-100 h-100 rounded-full overflow-hidden">
          <Nav />
        </div>
      </div>
    </section>
  );
}


// Refactor this into a snall Nav. 
// include about page, and then a portfolio 
