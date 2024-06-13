import Container from "./container";
import Image from "next/image";
import sitegroundIcon from "../public/siteground.jpg";
import middleshelfIcon from "../public/1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center justify-center">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-8">
            Checkout my agency and other affiliate links below
          </h2>

          {/* Images and Links */}
          <div className="flex items-center mb-10 lg:mb-0">
            {/* Middleshelf Studios Icon and Link */}
            <Link
              href="https://middleshelfstudios.au/"
              className="relative mr-4"
            >
              <Image
                src={middleshelfIcon}
                alt="Middleshelf Studios"
                width={200}
                height={350}
              />
            </Link>

            {/* Siteground Affiliate Link */}
            <Link
              href="https://www.siteground.com/index.htm?afcode=45853ed206e763d4e00e3f71418a1591"
              className="relative"
            >
              <Image
                src={sitegroundIcon}
                alt="Siteground"
                width={200}
                height={100}
                className="hover:opacity-75"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
