import Container from "./container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          {/* Logo */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-4 flex justify-center lg:justify-start">
            <Image
              src="/1.png"
              alt="Middleshelf Studios"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
            />
          </div>

          {/* Links */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <a
              href="https://middleshelfstudios.au/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Visit Middleshelf Studios
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
