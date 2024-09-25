"use client";
import * as React from "react";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/app/animation/animation-text"; // Import AnimatedText
import { Progress } from "../ui/progress";
import Footer from "./Footer";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const portfolioRef = React.useRef<HTMLDivElement>(null); //Buat ref untuk portofolio
  const aboutMeRef = React.useRef<HTMLDivElement>(null); // Buat ref untuk bagian About Me
  const skillRef = React.useRef<HTMLDivElement>(null); //Buat ref untuk bagian skill
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Fungsi untuk scroll ke bagian portfolio
  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fungsi untuk scroll ke bagian About Me
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fungsi untuk scroll kembali ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar Fixed */}
      <div className="bg-black h-14 w-full flex items-center px-10 fixed top-0 left-0 z-50">
        <div className="flex gap-1">
          <Image width={40} height={40} src="/icon.png" alt="Logo" />
          <h1 className="text-white text-3xl font-bold mr-auto">BAIM</h1>
        </div>

        {/* Tombol Burger untuk layar kecil */}
        <div className="lg:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Icon Burger Menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:gap-10 lg:flex-grow justify-center text-white font-bold text-xl list-none`}
        >
          <ul className="lg:flex lg:flex-row lg:space-x-10 flex flex-col space-y-5 lg:space-y-0 text-center lg:text-left mt-5 lg:mt-0">
            <li>
              <button
                onClick={scrollToTop}
                className="hover:text-slate-500 transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={scrollToPortfolio}
                className="hover:text-slate-500 transition duration-300"
              >
                Portofolio
              </button>
            </li>
            <li>
              <button
                onClick={scrollToAboutMe}
                className="hover:text-slate-500 transition duration-300"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={scrollToSkill}
                className="hover:text-slate-500 transition duration-300"
              >
                Skill
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Menambahkan padding di atas konten utama untuk mencegah tumpang tindih */}
      <div className="pt-14">
        <div className="bg-slate-500 w-full h-auto flex flex-col lg:flex-row items-center px-4 lg:px-40 py-20 lg:py-60 gap-10 lg:gap-36">
          {/* Container untuk teks dan AnimatedText */}
          <div className="flex flex-col lg:mr-10 text-center lg:text-left">
            <h1 className="text-white text-2xl font-bold">Hello I'm</h1>
            <h2 className="text-5xl lg:text-8xl text-white font-bold">
              NAJAD IBRAHIM
            </h2>
            <AnimatedText /> {/* Menambahkan komponen AnimatedText di sini */}
            {/* Container untuk ikon media sosial */}
            <div className="flex justify-center lg:justify-start pt-10 gap-2 items-center">
              <h1 className="pt-3 text-teal-50 font-semibold text-xl">
                You can find me
              </h1>
              <a href="https://www.instagram.com/baaaiiim_/">
                <Image
                  width={50}
                  height={50}
                  src="/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.tiktok.com/@yourking.only1?lang=id-ID">
                <Image width={50} height={50} src="/tiktok.png" alt="TikTok" />
              </a>
              <a href="https://discord.com/channels/@me">
                <Image
                  width={50}
                  height={50}
                  src="/discord.png"
                  alt="Discord"
                />
              </a>
              <a href="https://github.com/baim1998">
                <Image width={50} height={50} src="/github.png" alt="GitHub" />
              </a>
            </div>
          </div>

          {/* Gambar "Baim" dipindahkan ke sebelah kanan */}
          <div className="flex justify-center items-center">
            <div className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] bg-white rounded-full flex justify-center items-center overflow-hidden relative group">
              <Image
                className="object-cover object-center rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                width={360}
                height={360}
                src="/baim.png"
                alt="Baim"
              />
              {/* Menambahkan animasi di lingkaran */}
              <div className="absolute inset-0 rounded-full transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:scale-110"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-600 w-full h-auto py-10">
          <div className="pt-11">
            <h1
              className="text-black font-bold text-3xl lg:text-5xl text-center hover:text-white transition duration-300"
              id="porto"
              ref={portfolioRef}
            >
              My Portfolio
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-10">
            <div className="group text-center lg:text-left">
              <h3 className="text-lg font-semibold pb-2 text-black hover:text-white transition duration-300">
                Profile Company Toei
              </h3>
              <Image
                width={400}
                height={400}
                src="/company.png"
                alt=""
                className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <div className="group text-center lg:text-left">
              <h3 className="text-lg font-semibold pb-2 text-black hover:text-white transition duration-300">
                Profile Company
              </h3>
              <Image
                width={400}
                height={400}
                src="/sisha.png"
                alt=""
                className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <div className="group text-center lg:text-left">
              <h3 className="text-lg font-semibold pb-2 text-black hover:text-white transition duration-300">
                Profile about me
              </h3>
              <Image
                width={400}
                height={400}
                src="/profile.png"
                alt=""
                className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-10 gap-5">
            <h3 className="text-2xl font-semibold text-black hover:text-white transition duration-300">
              Portfolio Video
            </h3>
            <a href="https://drive.google.com/drive/folders/1UJ9xBps9ab_HbvIj4HnsydGsC0KLbSDb?usp=drive_link">
              <Image
                width={100}
                height={100}
                src="/google.png"
                alt="Google Drive"
              />
            </a>
          </div>
        </div>

        <div className="bg-slate-500 w-full h-auto py-20">
          <div className="pt-11 text-center">
            <h1
              className="text-black font-bold text-3xl lg:text-5xl hover:text-white transition duration-300"
              ref={aboutMeRef}
            >
              About Me
            </h1>
            <div className="flex flex-col justify-center items-center pt-4 text-lg text-white font-semibold">
              <p>
                I'm a passionate front-end developer who's always eager to learn{" "}
                <br />
                new things. Besides coding, I also love exploring my creativity{" "}
                <br />
                through video editing, photography, and storytelling.
              </p>
              <br />
              <p>
                I'm currently honing my skills as a front-end developer. With a{" "}
                <br />
                background in video editing and storytelling, I have a keen eye{" "}
                <br />
                for design and user experience.
              </p>
            </div>
            <div className="flex justify-center items-start gap-3 pt-5">
              <h1 className="text-white font-semibold text-lg hover:text-black transition duration-300">
                Read More
              </h1>
              <Image width={30} height={30} src="/next.png" alt="Next" />
            </div>
          </div>
        </div>

        <div className="bg-slate-600 w-full min-h-[60rem]">
          <div className="pt-11">
            <h1
              className="text-center text-black font-bold text-3xl md:text-5xl hover:text-white transition duration-300"
              ref={skillRef}
            >
              My Skill
            </h1>

            {/* Flex untuk daftar skill, berubah menjadi kolom pada layar kecil */}
            <div className="flex flex-col md:flex-row justify-center items-center pt-10 gap-10 md:gap-24">
              {/* Kolom pertama */}
              <div className="flex flex-col gap-5">
                {/* Skill Javascript */}
                <div className="flex gap-5 items-center">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src="/js.png"
                      alt="Javascript"
                      className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-xl font-semibold">
                      Javascript
                    </h1>
                    <Progress value={50} className="w-32 md:w-40 bg-white" />
                    <h1 className="text-white font-semibold text-lg">50%</h1>
                  </div>
                </div>

                {/* Skill HTML */}
                <div className="flex gap-5 items-center">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src="/html.png"
                      alt="Html"
                      className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-xl font-semibold">Html</h1>
                    <Progress value={75} className="w-32 md:w-40 bg-white" />
                    <h1 className="text-white font-semibold text-lg">75%</h1>
                  </div>
                </div>

                {/* Skill CSS */}
                <div className="flex gap-5 items-center">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src="/css.png"
                      alt="Css"
                      className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-xl font-semibold">Css</h1>
                    <Progress value={75} className="w-32 md:w-40 bg-white" />
                    <h1 className="text-white font-semibold text-lg">75%</h1>
                  </div>
                </div>
              </div>

              {/* Kolom kedua */}
              <div className="flex flex-col gap-5">
                {/* Skill React */}
                <div className="flex gap-5 items-center">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src="/react.png"
                      alt="React"
                      className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-xl font-semibold">React</h1>
                    <Progress value={50} className="w-32 md:w-40 bg-white" />
                    <h1 className="text-white font-semibold text-lg">50%</h1>
                  </div>
                </div>

                {/* Skill TypeScript */}
                <div className="flex gap-5 items-center">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src="/type.png"
                      alt="TypeScript"
                      className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-xl font-semibold">
                      TypeScript
                    </h1>
                    <Progress value={50} className="w-32 md:w-40 bg-white" />
                    <h1 className="text-white font-semibold text-lg">50%</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Garis di bawah judul */}
            <div className="w-full h-[7px] bg-slate-800 mt-20"></div>

            {/* Bagian skill video editing */}
            <div className="pt-11">
              <h1 className="text-white text-3xl font-semibold text-center hover:text-black transition duration-300">
                Skill Editing Video
              </h1>
            </div>

            {/* Flex untuk daftar skill video editing */}
            <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
              <div className="flex gap-5 items-center">
                <Image
                  width={100}
                  height={100}
                  src="/capcut.png"
                  alt="Capcut"
                  className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl text-white font-semibold">Capcut</h1>
                  <Progress value={90} className="w-32 md:w-40 bg-white" />
                  <h1 className="text-xl text-white font-semibold">90%</h1>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <Image
                  width={100}
                  height={100}
                  src="/vn.png"
                  alt="Vn"
                  className="rounded-xl transition-transform duration-300 transform hover:scale-110"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl text-white font-semibold">Vn</h1>
                  <Progress value={90} className="w-32 md:w-40 bg-white" />
                  <h1 className="text-xl text-white font-semibold">90%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
