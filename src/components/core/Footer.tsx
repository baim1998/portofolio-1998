// Footer.tsx
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Najad Ibrahim. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-2">
          <a
            href="https://www.instagram.com/baaaiiim_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@yourking.only1?lang=id-ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://github.com/baim1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-2">
          <a
            href="Email to: najad16081998@gmail.com"
            className="text-white hover:text-gray-400"
          >
            najad161081998@gmail.com
          </a>
        </div>
        <div className="mt-1">
          <a
            href="https://082142996204"
            className="text-white hover:text-gray-400"
          >
            WhatsApp here
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
