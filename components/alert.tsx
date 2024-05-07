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
import githubIcon from "../public/github.png";

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
              <a
                href="https://github.com/samtoohey93"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={githubIcon}
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
              <a
                href="https://twitter.com/iamsam2e"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={twitterIcon}
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
              <a
                href="https://profiles.wordpress.org/samtoohey93/"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={wordpressIcon}
                  alt="WordPress"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sam-toohey-6a444267/"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
              <a
                href="https://www.threads.net/@iamsam2e"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={threadsIcon}
                  alt="Threads"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
              <a
                href="https://instagram.com/iamsam2e"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="hover:opacity-75"
                />
              </a>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
