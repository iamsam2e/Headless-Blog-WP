import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";

// Import social media icons
import twitterIcon from "../public/twitter.png";
import wordpressIcon from "../public/WordPress-logotype-wmark.png";
import linkedinIcon from "../public/linkedin.png";
import threadsIcon from "../public/Threads.png";
import instagramIcon from "../public/insta.png";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm flex justify-center">
          {preview ? (
            <>
              This is a page preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-400 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            // Render social media icons
            <div className="flex items-center justify-center">
              <Image
                src={twitterIcon}
                alt="Twitter"
                width={40}
                height={40}
                className="mx-1"
              />
              <Image
                src={wordpressIcon}
                alt="WordPress"
                width={40}
                height={40}
                className="mx-1"
              />
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={40}
                height={40}
                className="mx-1"
              />
              <Image
                src={threadsIcon}
                alt="Threads"
                width={40}
                height={40}
                className="mx-1"
              />
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={40}
                height={40}
                className="mx-1"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
