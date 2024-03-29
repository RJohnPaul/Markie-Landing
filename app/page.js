"use client";
import Image from "next/image";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { ReactLogo } from "styled-icons/boxicons-logos";
import { TailwindCss } from "styled-icons/boxicons-logos";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };
  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          class="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              class="flex-none pt-3 pb-3 text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Markie
            </a>
            <div className="md:hidden">
              <button
                type="button"
                class="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <Link
                to="Landing"
                smooth={true}
                duration={500}
                className="cursor-pointer font-medium text-red-600 md:py-6 dark:text-red-500"
                spy={true}
                offset={-70}
              >
                Landing
              </Link>
              <Link
                to="Demo"
                smooth={true}
                duration={500}
                className="cursor-pointer font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                spy={true}
                offset={-70}
              >
                Demo
              </Link>
              <Link
                to="Features"
                smooth={true}
                duration={500}
                className="cursor-pointer font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                spy={true}
                offset={-70}
              >
                Features
              </Link>
              <Link
                to="FAQ"
                smooth={true}
                duration={500}
                className="cursor-pointer font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                spy={true}
                offset={-70}
              >
                Faq
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="cursor-pointer flex items-center gap-x-2 pt-2 pb-2 font-medium text-gray-500 hover:text-red-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-red-500"
                spy={true}
                offset={-70}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="Landing" className="relative overflow-hidden">
        {/* Gradients */}

        {/* End Gradients */}
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-red-600 to-violet-500 text-transparent dark:from-red-400 dark:to-violet-400">
                A Nextjs Web App
              </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Markie - Text to Markdown
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  A simple web app to convert your text to markdown. Just type
                  in the text and see the right side to get the markdown text.
                  You can also copy the markdown text. the text to markdown also
                  utilizes a toolbar to make the text bold, italic, and more.
                </p>
              </div>
              {/* Buttons */}
              <div
                className="mt-8 gap-3 flex justify-center"
                data-hs-overlay="#hs-cookies"
              >
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold transition-all rounded-full border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  target="_blank"
                  href="https://markie-gdsc.vercel.app/"
                >
                  Visit Markie
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-500 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="https://reactnative.dev/"
                  target="_blank"
                >
                  <ReactLogo className="flex-shrink-0 w-4 h-4" />
                  NextJS
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      <section id="Demo" className="pt-10 relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl leading-8 font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
              View the Live Demo
              <span className="text-red-600 leading-8">&nbsp;Below</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Click on the video for the demo.
            </p>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

            <div className="absolute inset-0 w-full h-full">
              <div className="flex flex-col justify-center items-center w-full h-full">
                {!showVideo ? (
                  <button
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={handlePlayClick}
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Play the overview
                  </button>
                ) : (
                  <video
                    controls
                    className="w-150 h-150 sm:w-96 h-96 rounded-xl shadow-lg dark:shadow-gray-900"
                    src="/todolistdemo.mp4"
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>

            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
              <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
            </div>

            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-red-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Features"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                Collaborative tools to design better user experience
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                We help businesses bring ideas to life in the digital world, by
                designing and implementing the technology tools that they need
                to win.
              </p>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
                  href="#"
                >
                  Contact sales to learn more
                  <svg
                    className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </p>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Industry-leading documentation
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our documentation and extensive Client libraries contain
                    everything a business needs to build a custom integration in
                    a fraction of the time.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Developer community support
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We actively contribute to open-source projects—giving back
                    to the community through development, patches, and
                    sponsorships.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Simple and affordable
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    From boarding passes to movie tickets, there's pretty much
                    nothing you can't store with Preline.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Icon Block */}
          <div className="text-center">
            <svg
              className="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200"
              width={227}
              height={88}
              viewBox="0 0 227 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M155.1 50.7001C151 50.7001 147.5 51.7001 144.5 53.1001C143.4 50.9001 142.3 49.0001 142.1 47.6001C142 46.0001 141.7 45.0001 142 43.0001C142.3 41.0001 143.4 38.3001 143.4 38.0001C143.4 37.8001 143.1 36.8001 140.8 36.8001C138.5 36.8001 136.4 37.2001 136.2 37.9001C136 38.5001 135.5 39.9001 135.2 41.4001C134.8 43.5001 130.5 51.1001 128.1 55.1001C127.3 53.5001 126.6 52.2001 126.5 51.1001C126.3 49.5001 126 48.5001 126.3 46.5001C126.6 44.5001 127.7 41.8001 127.7 41.5001C127.7 41.3001 127.4 40.3001 125.1 40.3001C122.8 40.3001 120.7 40.7001 120.5 41.4001C120.3 42.0001 120 43.5001 119.5 44.9001C119 46.3001 113.3 59.0001 111.8 62.3001C111 64.0001 110.4 65.3001 109.9 66.2001C109.9 66.2001 109.9 66.3001 109.8 66.4001C109.4 67.2001 109.2 67.6001 109.2 67.6001C108.9 68.2001 108.5 68.7001 108.4 68.7001C108.3 68.7001 108 67.2001 108.4 65.1001C109.3 60.7001 111.3 53.8001 111.3 53.6001C111.3 53.5001 111.7 52.3001 110 51.7001C108.3 51.1001 107.7 52.1001 107.6 52.1001C107.5 52.1001 107.3 52.5001 107.3 52.5001C107.3 52.5001 109.2 44.8001 103.8 44.8001C100.4 44.8001 95.8001 48.5001 93.5001 51.8001C92.1001 52.6001 89.0001 54.3001 85.7001 56.1001C84.4001 56.8001 83.1001 57.5001 81.9001 58.2001C81.8001 58.1001 81.7001 58.0001 81.6001 57.9001C75.0001 50.8001 63.0001 45.8001 63.5001 36.5001C63.7001 33.1001 64.9001 24.2001 86.6001 13.3001C104.5 4.50005 118.8 6.90005 121.3 12.3001C124.8 20.1001 113.7 34.4001 95.1001 36.5001C88.0001 37.3001 84.3001 34.6001 83.4001 33.5001C82.4001 32.4001 82.3001 32.4001 81.9001 32.6001C81.3001 32.9001 81.7001 33.9001 81.9001 34.4001C82.5001 35.8001 84.7001 38.4001 88.6001 39.7001C92.0001 40.8001 100.3 41.4001 110.3 37.5001C121.5 33.2001 130.3 21.1001 127.7 11.0001C125.2 0.800058 108.1 -2.49995 92.0001 3.20005C82.4001 6.60005 72.0001 12.0001 64.6001 18.9001C55.7001 27.2001 54.3001 34.4001 54.9001 37.4001C57.0001 48.1001 71.8001 55.1001 77.7001 60.3001C77.4001 60.5001 77.1001 60.6001 76.9001 60.7001C73.9001 62.2001 62.7001 68.1001 59.8001 74.3001C56.6001 81.4001 60.3001 86.4001 62.8001 87.1001C70.4001 89.2001 78.2001 85.4001 82.4001 79.2001C86.6001 72.9001 86.1001 64.8001 84.1001 61.1001C84.1001 61.1001 84.1001 61.0001 84.0001 61.0001C84.8001 60.6001 85.6001 60.1001 86.3001 59.6001C87.8001 58.7001 89.3001 57.9001 90.6001 57.2001C89.9001 59.2001 89.3001 61.5001 89.1001 65.0001C88.8001 69.0001 90.4001 74.2001 92.6001 76.2001C93.6001 77.1001 94.7001 77.1001 95.4001 77.1001C97.9001 77.1001 99.0001 75.0001 100.3 72.5001C101.8 69.5001 103.2 66.0001 103.2 66.0001C103.2 66.0001 101.5 75.5001 106.2 75.5001C107.9 75.5001 109.6 73.3001 110.4 72.2001C110.4 72.2001 110.4 72.1001 110.5 72.0001C110.7 71.7001 110.8 71.6001 110.8 71.6001C111.5 70.4001 113 67.7001 115.3 63.2001C118.2 57.4001 121.1 50.2001 121.1 50.2001C121.1 50.2001 121.4 52.0001 122.2 54.9001C122.7 56.6001 123.8 58.5001 124.6 60.4001C123.9 61.4001 123.5 61.9001 123.5 61.9001C122.9 62.6001 122.4 63.4001 121.7 64.2001C119.4 67.0001 116.6 70.1001 116.2 71.1001C115.8 72.2001 115.9 73.0001 116.7 73.6001C117.3 74.1001 118.4 74.1001 119.6 74.1001C121.7 74.0001 123.2 73.4001 123.9 73.1001C125 72.7001 126.3 72.1001 127.6 71.2001C129.9 69.5001 131.3 67.1001 131.1 63.9001C131 62.2001 130.5 60.4001 129.8 58.8001C130 58.5001 130.2 58.2001 130.4 57.9001C134 52.6001 136.8 46.9001 136.8 46.9001C136.8 46.9001 137.1 48.7001 137.9 51.6001C138.3 53.1001 139.2 54.7001 140 56.3001C136.6 59.0001 134.5 62.2001 133.8 64.3001C132.5 68.2001 133.5 69.9001 135.5 70.3001C136.4 70.5001 137.7 70.1001 138.6 69.7001C139.8 69.3001 141.2 68.7001 142.5 67.7001C144.8 66.0001 147 63.7001 146.8 60.5001C146.7 59.1001 146.4 57.6001 145.8 56.2001C148.7 55.0001 152.4 54.3001 157.1 54.9001C167.2 56.1001 169.2 62.4001 168.9 65.1001C168.5 67.8001 166.4 69.2001 165.7 69.7001C165 70.1001 164.8 70.3001 164.8 70.6001C164.9 71.1001 165.2 71.0001 165.8 71.0001C166.6 70.9001 171.1 68.8001 171.3 64.0001C171.6 57.4001 165.7 50.6001 155.1 50.7001ZM76.9001 77.0001C73.5001 80.7001 68.9001 82.0001 66.8001 80.9001C64.6001 79.6001 65.5001 74.2001 69.6001 70.4001C72.1001 68.0001 75.3001 65.8001 77.5001 64.5001C78.0001 64.2001 78.7001 63.8001 79.6001 63.2001C79.7001 63.1001 79.8001 63.1001 79.8001 63.1001C80.0001 63.0001 80.1001 62.9001 80.3001 62.8001C81.9001 68.3001 80.5001 73.2001 76.9001 77.0001ZM101.4 60.4001C100.2 63.3001 97.8001 70.6001 96.3001 70.2001C95.0001 69.9001 94.2001 64.3001 96.0001 58.9001C96.9001 56.2001 98.9001 52.9001 100 51.6001C101.8 49.6001 103.9 48.9001 104.3 49.7001C105 50.7001 102.1 58.6001 101.4 60.4001ZM121.6 70.0001C121.1 70.3001 120.6 70.4001 120.4 70.3001C120.3 70.2001 120.6 69.9001 120.6 69.9001C120.6 69.9001 123.1 67.2001 124.1 65.9001C124.7 65.2001 125.4 64.3001 126.1 63.4001C126.1 63.5001 126.1 63.6001 126.1 63.7001C126.2 66.9001 123 69.1001 121.6 70.0001ZM137.2 66.5001C136.8 66.2001 136.9 65.4001 138.1 62.7001C138.6 61.7001 139.7 59.9001 141.6 58.2001C141.8 58.9001 142 59.5001 141.9 60.2001C141.9 64.3001 139 65.8001 137.2 66.5001Z"
                fill="currentColor"
              />
            </svg>
            <div className="mt-2 sm:mt-6">
              <p className="text-gray-800 dark:text-gray-200">
                " Truly great template and costumer support. "
              </p>
            </div>
            {/* Star */}
            <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End Star */}
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <svg
              className="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200"
              width={100}
              height={33}
              viewBox="0 0 100 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8281 1.37569C22.5336 1.37569 23.2424 1.37569 23.9508 1.3708C23.943 3.90544 23.9763 6.44058 23.9352 8.97522C23.9171 10.6112 23.2268 12.3547 21.7273 13.1664C20.0327 14.0293 17.884 14.0245 16.2226 13.0866C14.8083 12.2589 14.1209 10.5569 14.1591 8.96984C14.1669 6.43764 14.1615 3.90544 14.1645 1.37324H16.2246C16.23 3.56544 16.2197 5.75518 16.227 7.94737C16.2632 8.95467 16.2657 10.051 16.8713 10.9096C17.6854 12.0304 19.3933 12.1361 20.5405 11.505C21.5786 10.8788 21.8002 9.57305 21.8208 8.45763C21.8384 6.09763 21.8227 3.73568 21.8281 1.37569ZM31.0244 1.42217C32.8091 0.891852 34.8007 1.21376 36.3902 2.16431C36.3804 2.90597 36.3804 3.64518 36.3804 4.38488C35.0463 3.3903 33.2714 2.65891 31.6149 3.23815C30.8987 3.45243 30.43 4.31443 30.7749 5.00814C31.0582 5.6725 31.8287 5.86574 32.4383 6.11329C33.7518 6.63626 35.2665 6.91708 36.2405 8.02711C37.4924 9.53929 37.1754 12.2315 35.3413 13.1512C33.2778 14.2201 30.6991 13.8801 28.7207 12.7672C28.7183 12.0045 28.7183 11.2447 28.7104 10.482C30.1996 11.6287 32.2656 12.3088 34.0894 11.6106C35.084 11.2501 35.2102 9.70269 34.3086 9.16846C32.9094 8.32114 31.1913 8.14844 29.8493 7.18761C28.6698 6.33931 28.322 4.65786 28.8117 3.33355C29.1771 2.37272 30.0612 1.70542 31.0244 1.42217ZM50.1764 1.19028C52.984 3.7665 55.7149 6.4303 58.4711 9.06279V1.37324H60.5317V13.8107C57.7211 11.1415 54.9884 8.39305 52.1621 5.73855V13.5391C51.4953 13.544 50.8305 13.544 50.1661 13.5465C50.1696 9.42873 50.149 5.31195 50.1764 1.19028ZM65.9449 1.3708C68.4311 1.3708 70.9144 1.38352 73.3977 1.36297C73.4128 1.98917 73.4128 2.61488 73.4128 3.24108C71.6306 3.24108 69.8504 3.23815 68.0676 3.24108V6.13384C69.6571 6.13922 71.2441 6.13384 72.8336 6.13922V8.00412C71.244 8.0064 69.6553 8.0064 68.0676 8.00412C68.0676 9.22717 68.0676 10.4541 68.073 11.6777C69.8503 11.6698 71.6306 11.6777 73.4055 11.6723C73.408 12.3166 73.4104 12.9628 73.4104 13.6071H65.94C65.9449 9.52902 65.9376 5.45138 65.9449 1.3708ZM79.4513 1.84974C81.3832 0.731877 83.8513 1.07433 85.747 2.10512C85.7832 2.86243 85.7832 3.6217 85.7808 4.3795C84.4051 3.3492 82.552 2.61244 80.8632 3.28756C79.9048 3.63001 79.7937 5.07517 80.6645 5.57466C82.0833 6.38872 83.8176 6.5531 85.1443 7.55306C86.927 8.88227 86.7954 12.0999 84.7578 13.1302C82.6943 14.2123 80.0902 13.8929 78.1167 12.7491C78.1167 11.9966 78.1167 11.2447 78.104 10.4923C79.5413 11.5197 81.3705 12.2183 83.1429 11.7393C83.797 11.5744 84.3973 10.9869 84.3043 10.2658C84.3176 9.71443 83.9311 9.23011 83.4467 9.0036C82.0554 8.282 80.4136 8.07848 79.1524 7.10249C77.5061 5.8271 77.6148 2.90352 79.4513 1.84974ZM91.8163 1.89133C93.7326 0.731877 96.2418 1.04351 98.1351 2.10218C98.1429 2.85215 98.1429 3.59919 98.1483 4.34868C96.7853 3.31838 94.9253 2.62026 93.259 3.30028C92.3295 3.66083 92.2233 5.06489 93.0731 5.57466C94.5261 6.42003 96.3347 6.5531 97.6639 7.63329C98.8077 8.53492 99.0367 10.2066 98.5935 11.5255C98.1786 12.6996 96.9962 13.3846 95.8343 13.635C94.0515 14.0034 92.148 13.6737 90.5639 12.7828C90.538 12.0177 90.538 11.2525 90.5355 10.4874C92.0345 11.6004 94.0775 12.3137 95.8988 11.6126C96.8905 11.252 97.0426 9.73204 96.1488 9.18069C94.711 8.28151 92.8975 8.15333 91.5502 7.08635C89.9617 5.81193 90.036 2.9637 91.8163 1.89133ZM0.960938 1.37324C3.12084 1.49946 5.36391 1.05574 7.45386 1.73673C9.77471 2.48084 10.1044 6.11084 7.9871 7.29035C9.91659 8.08925 10.3593 10.825 9.0355 12.3396C8.22144 13.3082 6.89223 13.5656 5.68924 13.6018C4.11249 13.6277 2.53867 13.6018 0.961916 13.6096V1.37324H0.960938ZM3.02544 3.24353C3.02283 4.31525 3.02283 5.3868 3.02544 6.45819C4.13304 6.40437 5.28221 6.61278 6.36388 6.30115C7.67009 5.92249 7.68036 3.7714 6.38198 3.38002C5.2871 3.10166 4.14086 3.29245 3.02544 3.24353ZM3.02544 8.26439C3.02055 9.42335 3.023 10.5828 3.02544 11.7378C4.29741 11.6478 5.66331 11.9878 6.8663 11.4546C8.05902 10.8724 7.9509 8.88863 6.70144 8.44295C5.51655 8.07359 4.24653 8.34511 3.02544 8.26439ZM42.2432 1.37324H44.3058V13.6096H42.2432V1.37324ZM33.7988 20.3716C35.7229 19.1529 38.2889 19.491 40.19 20.5908C40.1797 21.3275 40.1797 22.0643 40.1821 22.8006C38.7913 21.7835 36.8799 20.9978 35.2053 21.7781C34.3785 22.1724 34.2704 23.4008 35.0145 23.9341C36.5399 24.9027 38.5672 24.9492 39.8832 26.2735C40.7638 27.1052 40.9106 28.432 40.6846 29.5655C40.4219 30.699 39.4327 31.5439 38.3427 31.8648C36.4347 32.4519 34.2934 32.1353 32.5777 31.1383C32.5831 30.3835 32.5855 29.6291 32.5777 28.8742C34.0283 29.9637 35.9988 30.6799 37.7815 30.041C38.8578 29.7524 39.0721 28.0988 38.0981 27.5577C36.6583 26.6585 34.8267 26.5455 33.5023 25.4326C32.0009 24.1635 32.0988 21.4327 33.7988 20.3716ZM9.14117 19.8564H11.1993C11.2042 23.8905 11.205 27.9263 11.2018 31.9636H9.14117V19.8564ZM17.0597 19.5732C19.8008 22.19 22.5355 24.8176 25.3006 27.4095C25.3109 24.8695 25.303 22.3319 25.3055 19.7948C25.9904 19.7919 26.6774 19.7909 27.3666 19.7919C27.3714 23.9214 27.3612 28.0479 27.3714 32.1774C24.5765 29.5283 21.8359 26.8195 19.0621 24.1469C19.0488 26.7515 19.0621 29.3581 19.0567 31.9651H17.0602C17.0576 27.8332 17.0574 23.7025 17.0597 19.5732ZM46.0425 19.8564H48.1036V31.9636H46.0425V19.8564ZM54.031 19.8564C55.6901 19.8564 57.3508 19.8546 59.0132 19.8511C60.9011 19.8281 62.8511 20.7943 63.7738 22.4816C64.7654 24.2535 64.8295 26.456 64.2141 28.3649C63.5546 30.3707 61.5914 31.7895 59.4999 31.925C57.6786 32.0179 55.8548 31.9382 54.031 31.9636V19.8564ZM56.1537 21.7238V30.0933C57.6297 30.0395 59.2191 30.3203 60.5919 29.6301C61.9128 28.9496 62.5165 27.4041 62.4778 25.982C62.5316 24.5446 62.0243 22.9322 60.7005 22.1954C59.3116 21.42 57.6659 21.8221 56.1537 21.7238ZM68.8406 19.8564C71.3082 19.8542 73.777 19.8542 76.2469 19.8564C76.2469 20.4797 76.244 21.103 76.244 21.7267C74.4619 21.7215 72.681 21.7215 70.9012 21.7267V24.5549C72.4882 24.5578 74.0769 24.5588 75.6672 24.5578V26.3611C74.0777 26.3611 72.4873 26.3582 70.9012 26.3611V30.0909C72.6815 30.0963 74.4642 30.0909 76.2469 30.0938V31.9612H68.8406V19.8564ZM82.3029 19.854C83.9746 19.8692 85.6468 19.8383 87.316 19.8643C88.7347 19.9 90.2347 20.717 90.6427 22.1489C91.0086 23.3935 90.921 24.8695 90.1221 25.933C89.6329 26.569 88.8394 26.8092 88.0977 27.0127C89.5452 28.648 90.9817 30.2951 92.4073 31.9539C91.5919 31.9695 90.7796 31.9695 89.9705 31.9539C88.5894 30.313 87.1819 28.6952 85.7945 27.0646C85.3361 27.0675 84.8802 27.0675 84.4247 27.0675C84.4198 28.6981 84.4222 30.3287 84.4222 31.9597C83.7139 31.962 83.0055 31.962 82.2971 31.9597V19.8501L82.3029 19.854ZM84.4222 21.6602C84.4174 22.8607 84.4198 24.0613 84.4222 25.2613C85.5225 25.1997 86.6727 25.434 87.7377 25.0916C89.0542 24.5632 89.0826 22.4498 87.7866 21.8867C86.7211 21.4792 85.5435 21.7189 84.4281 21.6621"
                fill="currentColor"
              />
            </svg>
            <div className="mt-2 sm:mt-6">
              <p className="text-gray-800 dark:text-gray-200">
                "The best one I&nbsp;ve ever come across."
              </p>
            </div>
            {/* Star */}
            <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                  fill="#cbd5e1"
                />
                <path
                  d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End Star */}
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <svg
              className="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200"
              width={106}
              height={36}
              viewBox="0 0 106 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494055 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z"
                fill="currentColor"
              />
            </svg>
            <div className="mt-2 sm:mt-6">
              <p className="text-gray-800 dark:text-gray-200">
                " This is a truly beautiful template. "
              </p>
            </div>
            {/* Star */}
            <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End Star */}
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <svg
              className="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200"
              width={140}
              height={47}
              viewBox="0 0 140 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M96.2674 23.8697C93.7525 23.5204 92.7744 22.8916 92.8443 21.9136C92.984 20.1671 95.1497 19.9575 96.477 20.0274C99.0619 20.2369 99.6207 22.4725 99.6207 22.7519L102.136 22.5423C101.996 20.9355 100.669 17.7918 96.8962 17.5124C94.8004 17.3727 92.984 17.7918 91.7964 18.8397C90.8882 19.6082 90.1197 20.7958 89.98 21.9835C89.7006 25.8258 93.473 26.3847 95.8483 26.734C98.8523 27.1531 99.5509 27.5723 99.481 28.69C99.481 29.2489 99.1317 29.8078 98.7126 30.1571C98.0838 30.6461 96.8263 30.8557 95.5688 30.716C92.7046 30.4365 92.495 28.6202 92.495 28.2709L89.98 28.3407C89.98 29.8777 91.0279 32.8817 95.2894 33.3707C97.5948 33.6501 99.481 32.9515 100.459 32.2529C101.577 31.4146 102.206 30.0174 102.275 28.69C102.485 24.708 98.6427 24.219 96.2674 23.8697Z"
                  fill="currentColor"
                />
                <path
                  d="M110.659 30.7161C114.431 30.7161 114.152 26.4546 114.152 26.4546V17.9316H117.086V26.3847C117.086 26.3847 117.086 26.4546 117.086 26.6642C117.086 27.9217 116.946 33.3009 110.728 33.3009H110.519C104.301 33.3009 104.162 27.9915 104.162 26.6642C104.162 26.5245 104.162 26.3847 104.162 26.3847V17.9316H107.096V26.3847C107.166 26.3847 106.886 30.7161 110.659 30.7161Z"
                  fill="currentColor"
                />
                <path
                  d="M136.926 28.3405C136.088 29.8076 134.411 30.6459 132.595 30.6459C130.08 30.6459 128.054 29.0392 127.705 26.5242H139.93C139.93 26.1749 139.93 25.6859 139.93 25.3366C139.93 20.5861 136.717 17.5122 132.455 17.5122C128.194 17.5122 124.771 20.5162 124.771 25.3366C124.771 30.1569 128.194 33.2308 132.455 33.2308C135.11 33.2308 137.625 32.113 139.022 29.8775L136.926 28.3405ZM132.525 20.2368C134.97 20.2368 136.717 21.7737 137.136 24.2887H127.774C128.124 21.7038 130.01 20.2368 132.525 20.2368Z"
                  fill="currentColor"
                />
                <path
                  d="M80.9681 17.582C78.8723 17.582 76.7066 18.5601 75.7286 20.2367V17.8615H72.7944V40.2168H75.7286V30.7158C76.7066 32.4623 78.8723 33.3006 80.9681 33.3006C85.0898 33.3006 88.513 30.2966 88.513 25.4762C88.513 20.7257 85.0898 17.582 80.9681 17.582ZM80.6886 30.576C78.2435 30.576 75.6587 28.8295 75.6587 25.616C75.6587 22.4024 78.1737 20.3066 80.8284 20.3066C83.5529 20.3066 85.7186 22.3325 85.7186 25.3365C85.6487 28.4104 83.3433 30.576 80.6886 30.576Z"
                  fill="currentColor"
                />
                <path
                  d="M122.605 9.68799H119.67V32.9515H122.605V9.68799Z"
                  fill="currentColor"
                />
                <path
                  d="M64.4113 17.4424C64.3414 17.4424 64.2716 17.4424 64.2017 17.4424C64.2017 17.4424 61.6867 17.4424 59.3115 18.4204L59.5909 19.1889L60.1498 20.7957C60.9881 20.4464 62.3853 20.0272 64.2017 19.9574C64.2716 19.9574 64.3414 19.9574 64.4113 19.9574C67.6249 19.9574 67.6947 22.8915 67.6947 22.8915V23.6599L62.6648 23.5901C62.3155 23.5901 60.2895 23.5901 58.8225 24.9873C58.4732 25.3366 58.1937 25.6859 57.9841 26.1051C57.7047 26.7338 57.4951 27.4324 57.4951 28.2009C57.4951 29.1789 57.7746 30.0871 58.1937 30.8556C58.4033 31.2049 58.6827 31.5542 58.9622 31.8336C59.9402 32.7418 61.3374 33.3007 62.8744 33.3007C63.0141 33.3007 63.1538 33.3007 63.2237 33.3007C64.9702 33.2308 66.577 32.5322 67.6249 30.8556V32.9514H70.2097V23.4504C70.2796 21.0053 68.7426 17.4424 64.4113 17.4424ZM63.1538 30.9254C62.2456 30.9953 60.1498 30.5063 60.1498 28.2009C60.1498 27.5721 60.7087 26.1051 62.5251 26.1051C64.3414 26.1051 67.555 26.1051 67.555 26.1051C67.6249 28.8995 65.9482 30.7857 63.1538 30.9254Z"
                  fill="currentColor"
                />
                <path
                  d="M49.1118 30.3667C44.4311 30.3667 40.8682 26.5942 40.8682 21.9136C40.8682 17.233 44.501 13.3906 49.1118 13.3906C51.3473 13.3906 53.3034 14.2988 54.7704 15.696L56.5169 13.3208C54.6307 11.5743 51.976 10.5264 49.1118 10.5264C42.8243 10.5264 37.8643 15.6262 37.8643 21.9136C37.8643 28.201 42.8243 33.3008 49.1118 33.3008C51.6966 33.3008 54.002 32.4625 55.8183 31.1351L54.8403 28.4106C53.2335 29.5284 51.0678 30.3667 49.1118 30.3667Z"
                  fill="currentColor"
                />
                <path
                  d="M0 30.2965H3.63273V28.061H8.24351V30.2965H11.8064V12.9712H0V30.2965Z"
                  fill="currentColor"
                />
                <path
                  d="M18.0938 8.08105C17.5349 8.08105 17.1157 8.50022 17.1157 9.0591C17.1157 9.61798 17.5349 10.0371 18.0938 10.0371C18.6526 10.0371 19.0718 9.61798 19.0718 9.0591C19.1417 8.57008 18.6526 8.08105 18.0938 8.08105Z"
                  fill="currentColor"
                />
                <path
                  d="M18.0938 12.6221C17.5349 12.6221 17.1157 13.0412 17.1157 13.6001C17.1157 14.159 17.5349 14.5782 18.0938 14.5782C18.6526 14.5782 19.0718 14.159 19.0718 13.6001C19.1417 13.1111 18.6526 12.6221 18.0938 12.6221Z"
                  fill="currentColor"
                />
                <path
                  d="M18.0938 17.2329C17.5349 17.2329 17.1157 17.6521 17.1157 18.211C17.1157 18.7698 17.5349 19.189 18.0938 19.189C18.6526 19.189 19.0718 18.7698 19.0718 18.211C19.1417 17.6521 18.6526 17.2329 18.0938 17.2329Z"
                  fill="currentColor"
                />
                <path
                  d="M22.7744 8.08105C22.2155 8.08105 21.7964 8.50022 21.7964 9.0591C21.7964 9.61798 22.2155 10.0371 22.7744 10.0371C23.3333 10.0371 23.7525 9.61798 23.7525 9.0591C23.7525 8.57008 23.3333 8.08105 22.7744 8.08105Z"
                  fill="currentColor"
                />
                <path
                  d="M22.7744 12.6221C22.2155 12.6221 21.7964 13.0412 21.7964 13.6001C21.7964 14.159 22.2155 14.5782 22.7744 14.5782C23.3333 14.5782 23.7525 14.159 23.7525 13.6001C23.7525 13.1111 23.3333 12.6221 22.7744 12.6221Z"
                  fill="currentColor"
                />
                <path
                  d="M22.7744 17.2329C22.2155 17.2329 21.7964 17.6521 21.7964 18.211C21.7964 18.7698 22.2155 19.189 22.7744 19.189C23.3333 19.189 23.7525 18.7698 23.7525 18.211C23.7525 17.6521 23.3333 17.2329 22.7744 17.2329Z"
                  fill="currentColor"
                />
                <path
                  d="M27.3154 8.08105C26.7566 8.08105 26.3374 8.50022 26.3374 9.0591C26.3374 9.61798 26.7566 10.0371 27.3154 10.0371C27.8743 10.0371 28.2935 9.61798 28.2935 9.0591C28.2935 8.57008 27.8743 8.08105 27.3154 8.08105Z"
                  fill="currentColor"
                />
                <path
                  d="M27.3154 12.6221C26.7566 12.6221 26.3374 13.0412 26.3374 13.6001C26.3374 14.159 26.7566 14.5782 27.3154 14.5782C27.8743 14.5782 28.2935 14.159 28.2935 13.6001C28.2935 13.1111 27.8743 12.6221 27.3154 12.6221Z"
                  fill="currentColor"
                />
                <path
                  d="M27.3154 17.2329C26.7566 17.2329 26.3374 17.6521 26.3374 18.211C26.3374 18.7698 26.7566 19.189 27.3154 19.189C27.8743 19.189 28.2935 18.7698 28.2935 18.211C28.2935 17.6521 27.8743 17.2329 27.3154 17.2329Z"
                  fill="currentColor"
                />
                <path
                  d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z"
                  fill="currentColor"
                />
                <path
                  d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M5.93812 19.1189C9.21766 19.1189 11.8762 16.4603 11.8762 13.1808C11.8762 9.90126 9.21766 7.24268 5.93812 7.24268C2.65859 7.24268 0 9.90126 0 13.1808C0 16.4603 2.65859 19.1189 5.93812 19.1189Z"
                  fill="white"
                />
                <path
                  d="M16.627 23.1709V35.3266H28.7826V23.1709H16.627ZM26.3375 31.9733H19.1419V30.4364H26.3375V31.9733ZM26.3375 27.9913H19.1419V26.4543H26.3375V27.9913Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width={140} height={47} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="mt-2 sm:mt-6">
              <p className="text-gray-800 dark:text-gray-200">
                " There one theme that you want. "
              </p>
            </div>
            {/* Star */}
            <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End Star */}
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <svg
              className="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200"
              width={140}
              height={47}
              viewBox="0 0 140 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                fill="currentColor"
              />
              <path
                d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                fill="currentColor"
              />
              <path
                d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                fill="currentColor"
              />
              <path
                d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                fill="currentColor"
              />
              <path
                d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                fill="currentColor"
              />
              <path
                d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                fill="currentColor"
              />
              <path
                d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                fill="currentColor"
              />
              <path
                d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                fill="currentColor"
              />
              <path
                d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                fill="currentColor"
              />
              <path
                d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                fill="currentColor"
              />
              <path
                d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                fill="currentColor"
              />
            </svg>
            <div className="mt-2 sm:mt-6">
              <p className="text-gray-800 dark:text-gray-200">
                " Great design and thorough documentation. "
              </p>
            </div>
            {/* Star */}
            <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="h-4 w-4 text-red-500"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                  fill="#cbd5e1"
                />
                <path
                  d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End Star */}
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Grid */}
      </div>
      <section
        id="FAQ"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        {/* End Title */}
        <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  How does Markie allow users to input Markdown text?
                </h3>
                <p className="mt-1 text-gray-500">
                  To input Markdown text, users simply need to type directly
                  into the text input area provided by Markie.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  How does Markie provide real-time rendering of Markdown input?
                </h3>
                <p className="mt-1 text-gray-500">
                  Markie utilizes Remark.js to parse the Markdown input and
                  update the preview in real-time as the user types.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  What role does Next.js play in Markie's architecture?
                </h3>
                <p className="mt-1 text-gray-500">
                  Next.js provides server-side rendering and routing for Markie,
                  enhancing its performance and SEO capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  How does Tailwind CSS contribute to Markie's styling?
                </h3>
                <p className="mt-1 text-gray-500">
                  Tailwind CSS is used for rapid UI development in Markie,
                  providing utility classes for consistent and responsive
                  styling.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  What functionalities does React Hot Toast provide in Markie?
                </h3>
                <p className="mt-1 text-gray-500">
                  React Hot Toast is used for displaying toast notifications in
                  Markie, enhancing user interaction and feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  What functionalities does Remark.js provide in Markie?
                </h3>
                <p className="mt-1 text-gray-500">
                  Remark.js is utilized for parsing Markdown input and
                  converting it into HTML for rendering in Markie.
                </p>
              </div>
            </div>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </section>
      <section
        id="Contact"
        className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto"
      >
        {/* Grid */}
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              Markie
            </a>
          </div>
          {/* End Col */}
          <div className="mt-3">
            <p className="text-gray-500">
              A Product of{" "}
              <a
                className="font-semibold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
                href="https://john-porfolio.vercel.app/"
                target="_blank"
              >
                John Paul
              </a>{" "}
            </p>
            <p className="text-gray-500">
              © Markie. All rights reserved with ❤️
            </p>
          </div>
          {/* Social Brands */}
          <div className="mt-3 space-x-2">
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              <TailwindCss className="flex-shrink-0 w-5 h-5" />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://react.dev/"
              target="_blank"
            >
              <ReactLogo className="flex-shrink-0 w-5 h-5" />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://github.com/RJohnPaul/Markie"
              target="_blank"
            >
              <Github className="flex-shrink-0 w-5 h-5" />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://www.linkedin.com/in/john-paul-572496278/"
              target="_blank"
            >
              <Linkedin className="flex-shrink-0 w-5 h-5" />
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </section>
    </>
  );
}
