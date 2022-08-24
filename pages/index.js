/** @format */

import Head from "next/head";
import React, { useState } from "react";
import LearnerShowcase from "../components/LearnerShowcase";
import PersonalizedLearningExperiece from "../components/PersonalizedLearningExperiece";
import ProvenPathwaySection from "../components/ProvenPathwaySection";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimonial from "../components/Testimonial";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import hiringNetworkData from "./../data/hiring-network.json";

function ImageWithDescription({ name, githuburl, caption, role, imgSrc }) {
  return (
    <div className="md:px-4 mt-8 md:mt-0">
      <div className="relative rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 w-auto shadow-md ">
        <img
          src={imgSrc}
          alt={caption}
          className="block w-full object-cover md:object-contain p-0.5 rounded-lg"
        />
      </div>
      <div className="flex space-x-4 justify-between pt-4">
        <p className={"text-lg text-indigo-400 font-semibold"}>{name}</p>
        <div className="pr-1">{githuburl}</div>
      </div>
      <div className={"text-sm text-gray-100 leading-tight pt-3"}>
        {caption}
      </div>
      <div>{role}</div>
    </div>
  );
}

let hiringPartner = (index, title, url, logoSrc) => {
  return (
    <a
      key={index}
      href={url}
      target="_blank"
      className="col-span-1 flex justify-center items-center p-8 rounded-md hover:shadow-lg z-10 relative transition"
    >
      <img className="max-h-16" src={`hiring-network/${logoSrc}`} alt={title} />
    </a>
  );
};

export default function Home(props) {
  const [showLess, setShowLess] = useState(false);
  const hiringNetwork = showLess ? props.data : props.data.slice(0, 10);

  return (
    <div className={""}>
      <Head>
        <title>Leadership in Teaching Excellence (LITE)</title>
        <meta
          name="description"
          content="The Minor Degree in Advanced Web Development Curriculum is approved by All India Council for Technical Education (AICTE) under the National Educational Alliance for Technology (NEAT) programme of the Ministry of Education, Government of India. This degree can be opted for and pursued by students who are enrolled in the Institutes selected as part of the Batch 1 of LITE programme."
        ></meta>
        <meta
          name="keywords"
          content="Employment for Students, AICTE guided industry training for faculty, Recognition for Institute, Proven Online Teaching-Learning method as per NEP 2020, Internship with Covid19 Digital War Rooms."
        ></meta>
        <meta name="author" content="pupilfirst.org"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Minor Degree in Advanced Web Development"
        />
        <meta
          property="og:description"
          content="The Minor Degree in Advanced Web Development Curriculum is approved by All India Council for Technical Education (AICTE) under the National Educational Alliance for Technology (NEAT) programme of the Ministry of Education, Government of India. This degree can be opted for and pursued by students who are enrolled in the Institutes selected as part of the Batch 1 of LITE programme."
        />
        <meta name="theme-color" content="#111827" />
        <meta
          property="og:image"
          content="Minor-Degree-in-Advanced-Web-Development.png"
        />
        <meta property="og:url" content="https://wd.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="Minor-Degree-in-Advanced-Web-Development.png"
        />
        <meta
          property="og:site_name"
          content="Minor Degree in Advanced Web Development"
        />
        <meta name="The Minor Degree in Advanced Web Development Curriculum is approved by All India Council for Technical Education (AICTE) under the National Educational Alliance for Technology (NEAT) programme of the Ministry of Education, Government of India. This degree can be opted for and pursued by students who are enrolled in the Institutes selected as part of the Batch 1 of LITE programme." />
      </Head>
      <main className="bg-gradient-to-br from-gray-800 to-gray-900 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 relative">
          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.webp"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div>
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <a className="block" href="/">
                <img
                  className="block w-48 md:w-64"
                  src="logos/wd-pupilfirst-logo.svg"
                  alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
                />
              </a>
              <img
                className="w-16 md:w-24"
                src="logos/aicte-logo.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
          </header>
          <div className="relative pb-4 px-4 xl:px-0">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex gap-8 xl:gap-12 items-center">
              <div className="z-10 flex-1 flex flex-col items-center text-center md:text-left md:items-start">
                <p className="rounded bg-gray-800 py-1 px-1 md:px-2 mt-4 font-medium text-sm text-gray-400 max-w-max">
                  Leadership in Teaching Excellence Programme.
                </p>
                <h1 className="text-primary-500 text-3xl md:text-3xl lg:text-5xl py-2 font-extrabold lg:leading-tight xl:leading-tight">
                  "There are 10 Crore Job Opportunities in the Global Web
                  Development Industry”
                </h1>
                <p>
                  <a
                    className="text-sm underline text-gray-100 hover:text-primary-500"
                    href="https://blogs.microsoft.com/wp-content/uploads/prod/prod/2020/06/4_The-Great-Lockdown.png"
                    target="_blank no-referrer"
                  >
                    Read source
                  </a>
                </p>
                <p className="pr-2 mt-8 text-xl text-white leading-relaxed font-semibold">
                  Admissions open for{" "}
                  <span className="bg-yellow-300 text-gray-900">
                    10,000 Scholarships for Minor Degree
                  </span>{" "}
                  in Advanced Web Development.
                </p>
                {/* <div className="flex gap-4 items-start w-full md:w-auto">
                  <a
                    href="https://www.pupilfirst.school/courses/1802"
                    target="_blank"
                    className="flex justify-center w-full md:w-auto space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                  >
                    Start by applying to WD101 now
                  </a>

                  <svg
                    width="56"
                    height="40"
                    viewBox="0 0 56 40"
                    fill="none"
                    className="hidden md:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_160_5)">
                      <path
                        d="M54.9404 1.94461C55.1491 1.43327 54.9038 0.849574 54.3924 0.640897C53.8811 0.43222 53.2974 0.677579 53.0887 1.18892L54.9404 1.94461ZM53.0887 1.18892C50.0573 8.61712 45.8369 17.8705 38.0922 24.2444C30.4149 30.5627 19.1337 34.1583 1.71876 29.9693L1.25102 31.9139C19.1769 36.2258 31.1274 32.5666 39.3631 25.7886C47.5314 19.0662 51.9054 9.38168 54.9404 1.94461L53.0887 1.18892Z"
                        fill="white"
                      />
                      <path
                        d="M8.90294 25.1151L2.07899 30.4112C1.6531 30.7418 1.56588 31.3504 1.88179 31.7872L6.71798 38.4746"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_160_5">
                        <rect width="56" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div> */}
              </div>
              <div className="flex-1 py-12 lg:pt-0 pb-12 hidden md:block">
                <img
                  className="w-full md:px-2 xl:px-16"
                  src="hero/hero-student.svg"
                  alt="Illustration of female graduate student."
                />
              </div>
            </div>
          </div>
          <section className="px-4 xl:mx-0 pb-10 md:pb-16 pt-6  bg-gray-900">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-16 pb-16 pt-10 bg-white rounded-lg flex items-center flex-col">
              <p className="text-2xl font-bold">Scholarships supported by</p>
              <div className="w-full flex flex-wrap gap-10 items-center lg:justify-between mt-12">
                <img src="/logos/msdf-logo.png" alt="" />
                <img src="/logos/schmidt-futures.png" alt="" />
                <img src="/logos/ACT-Logo.png" alt="" />
                <img src="/logos/sgf-logo.png" alt="" />
                <img src="/logos/meta-logo.png" alt="" />
              </div>
            </div>
          </section>
          <svg
            className="hidden md:block absolute right-0 top-1/4 object-center z-1"
            width="120"
            height="400"
            fill="none"
            viewBox="0 0 120 400"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="120"
              height="400"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          <div className="px-4 lg:px-0 pb-12 max-w-6xl 2xl:max-w-7xl mx-auto relative">
            <p className="text-lg font-semibold text-primary-500 pb-4">
              Watch mini video
            </p>
            <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-3xl shadow-2xl border-2 border-gray-900"
                src="https://player.vimeo.com/video/733554719?h=c8851152f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Web Development @ Pupilfirst"
              ></iframe>
            </div>
            <div className="px-4 lg:px-0 py-1 max-w-6xl 2xl:max-w-7xl mx-auto text-center mt-6 md:mt-12">
              <a
                id="apply-button-below-video"
                href="https://www.pupilfirst.school/courses/1802"
                target="_blank"
                className="inline-flex justify-center space-x-3 p-3 lg:px-6 lg:py-3.5 text-gray-900 bg-yellow-400 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
              >
                Start by applying to WD101 now
              </a>
            </div>
          </div>
        </section>

        <SectionWithHeading
          heading="Dynamic Curriculum by Industry Experts"
          darkBackground="true"
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            Confidently, learn how to become a full-stack developer by learning
            from a curriculum designed and maintained by practising software
            engineering professionals.
          </p>

          <div className="gap-8 md:divide-x divide-gray-700 sm:grid sm:grid-cols-2 lg:grid-cols-4 py-8 lg:pb-16">
            <ImageWithDescription
              name="Vignesh Rajendran"
              caption={<p> Principal Engineer, Oracle</p>}
              role={
                <p className="text-sm md:text-base tracking-tight leading-snug text-white mt-3">
                  Vignesh is a seasoned UI Technology Evangelist with around 10
                  years of experience building and developing amazing User
                  Experiences across various platforms and domains. He works
                  with Oracle as a Principal Engineer solving UI engineering use
                  cases for their Cloud and Cloud-native products. The stack he
                  works on covers everything UI, although now he mainly codes on
                  Javascript and Typescript. In leisure, he writes a lot and
                  read a lot more.
                </p>
              }
              imgSrc="people/Vignesh_Profile.jpg"
            />

            <ImageWithDescription
              name="Melson J Zacharias"
              caption={<p> CTO, Perleybrook Labs LLC.</p>}
              role={
                <p className="text-sm md:text-base tracking-tight leading-snug text-white mt-3">
                  Melson is CTO at Perleybrook Labs LLC, where he primarily
                  works with C++, Python, and Typescript. In his spare time, he
                  would be reading a book or can be seen answering questions in
                  StackOverflow.
                </p>
              }
              imgSrc="people/melson.jpeg"
            />
            <ImageWithDescription
              name="Avishek Jana"
              caption={
                <p>
                  {" "}
                  Co-Founder &nbsp; Principal Engineer, GEOGO Techsolutions Pvt.
                  Ltd.
                </p>
              }
              role={
                <p className="text-sm md:text-base tracking-tight leading-snug text-white mt-3">
                  Avishek is an Engineer, a full-stack developer and an
                  open-source contributor. Currently, he is working at GEOGO
                  Techsolutions as Principal Engineer. He started his
                  professional career in 2013 and worked on technologies like:
                  Ruby on Rails, NodeJS, ReactJS, TypeScript etc. Apart from
                  work, he loves to mentor and train fresh graduates to enhance
                  their skills as per industry demands. Teaching is his way to
                  contribute back to the society.
                </p>
              }
              imgSrc="people/avishek_photo.jpeg"
            />
            <ImageWithDescription
              name="Hari Gopal"
              githuburl={
                <a
                  className="inline-flex text-gray-300 hover:text-indigo-400 transition"
                  href="https://github.com/harigopal"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              }
              caption={<p>Chief Technology Officer, Pupilfirst</p>}
              role={
                <p className="text-sm md:text-base tracking-tight leading-snug text-white mt-3">
                  Hari is a full-stack software engineer with 12 years of
                  experience and leads the development of Pupilfirst LMS, one of
                  the largest open-source projects that uses the ReScript
                  programming language.
                </p>
              }
              imgSrc="people/hari-gopal.png"
            />
          </div>
          <p className="text-lg text-white px-3 py-2 bg-gray-800 inline-block rounded-md">
            The curriculum is{" "}
            <a
              target="_blank no-referrer"
              className="text-indigo-400 underline"
              href="https://lite.pupilfirst.org/dynamic-curriculum"
            >
              updated dynamically
            </a>{" "}
            based on student/faculty feedback and changes in the industry
          </p>
        </SectionWithHeading>
        <SectionWithHeading heading="Beginner to advanced courses">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            This programme is designed with 4 courses such that selected
            institutions can offer a 18-20 credit “Minor Degree in Advanced Web
            Development” through their trained faculty to students.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-indigo-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-indigo-400 text-xl md:text-2xl font-bold">
                WD 101
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Beginner</span> - Getting
                Started with Javascript
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-primary-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-green-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-green-400 text-xl md:text-2xl font-bold">
                WD 201
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Intermediate</span> -
                Server-side programming with Node.js
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-indigo-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-red-500 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-red-400 text-xl md:text-2xl font-bold">
                WD 301
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Advanced</span> - Front-end
                development with React &amp; Typescript
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-green-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>

            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-cyan-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-cyan-400 text-xl md:text-2xl font-bold">
                WD 401
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Industry</span> - Getting ready
                for production deployment.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-white ">
            More advanced courses would be added to give a broader choice of
            specialisations.
          </p>
          <div className="pt-8 lg:pt-16">
            <img
              className="w-full h-full object-contain mix-blend-color-dodge"
              src="course-path/course-pathway.png"
              alt="Course pathway"
            />
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading="Learner-Centered Classrooms"
          darkBackground="true"
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            You shall be a part of a batch having students across 6 states in
            India to learn via Learner-Centered Classrooms under National
            Educational Policy 2020 (NEP 2020)
          </p>

          <img className="mt-12" src="/radical-shift.jpg" alt="" />
        </SectionWithHeading>

        <PersonalizedLearningExperiece />
        <SectionWithHeading
          heading="There is no speed limit for learning."
          darkBackground="true"
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            As a beginner, we expect you to make many mistakes. Get personalised
            guidance from LITE faculty members &amp; student teaching assistants
            to find answers and confidently move ahead.
          </p>

          <div className="md:grid flex flex-col gap-12 md:gap-24 items-center md:items-start md:grid-cols-12 mt-8 z-10">
            <div className="col-span-6 md:pb-12">
              <div className="relative w-full gap-24 text-white px-4 md:px-12 py-8 md:py-20 bg-gray-800 rounded-2xl border-b md:border-b-0 md:border-r border-primary-600 z-10">
                <p className="text-lg md:text-2xl">
                  GDC batch students have completed this curriculum in
                </p>
                <p className="text-4xl md:text-6xl font-semibold mt-4">
                  12 Weeks
                </p>
                <svg
                  className="absolute right-1/2 md:-right-2 rotate-90 md:rotate-0 -bottom-5 md:bottom-auto md:top-1/2 transform -translate-y-1/2 md:-translate-y-1/2"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_247_6)">
                    <rect
                      x="-8.48535"
                      y="8.48535"
                      width="12"
                      height="12"
                      rx="3"
                      transform="rotate(-45 -8.48535 8.48535)"
                      fill="#FFD761"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_247_6">
                      <rect width="8" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-span-6 md:pt-4">
              <div>
                <div className="flex gap-3 items-center">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Web Development 101:
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  1 Day
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center mt-8">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Web Development 201:
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  6 Weeks
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center mt-8">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Web Development 301:
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  6 Weeks
                </p>
              </div>
            </div>
          </div>
          <svg
            className="hidden md:block absolute right-0 top-1/4 object-center z-1"
            width="120"
            height="400"
            fill="none"
            viewBox="0 0 120 400"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="120"
              height="400"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </SectionWithHeading>
        <LearnerShowcase />
        <SectionWithHeading
          heading="Build a Successful Career"
          darkBackground="true"
        >
          <div>
            <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
              Your learning efforts to complete the curriculum shall deliver a
              successful career.
            </p>

            <div className="md:w-4/5 mt-6 md:mt-12">
              <img
                className="rounded-lg w-full "
                src="successful-career/Shailesh-Anand.jpg"
                alt="Freshwork Academy photo"
              />
              <p className="text-white pt-2 md:text-lg italic">
                Shailesh Anand from the GDC Fellowship batch has completed the
                curriculum as well as the internship and got placed in Google at
                28 lacs CTC.
              </p>
            </div>
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Growing Hiring Network">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            69 companies are currently participating in the hiring network which
            is being expanded every month.
          </p>

          <div className="bg-white rounded-lg p-4 mt-2 lg:mt-4">
            <div className="grid grid-cols-2 gap-1 md:grid-cols-5">
              {hiringNetwork.map((partner, index) =>
                hiringPartner(
                  index,
                  partner.title,
                  partner.url,
                  partner.logoSrc
                )
              )}
            </div>
            <button
              className="block mx-auto my-4 text-sm font-semibold text-secondary-600 px-3 py-2 bg-secondary-50 rounded-md"
              onClick={() => setShowLess((prev) => !prev)}
            >
              {showLess ? "Show Less" : "Show more"}
            </button>
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading="Powerful Alumni Network"
          darkBackground={true}
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            Since 2016, 770 students have graduated from our courses/programmes
            to work at leading startups and corporations.
          </p>
          <div className="bg-white rounded-lg p-4 mt-2 lg:mt-4">
            <img
              className="w-full h-full"
              src="/alumni-network/alumni-network.png"
              alt="Alumni Network Logos"
            />
          </div>
        </SectionWithHeading>

        <ProvenPathwaySection />
        <SectionWithHeading heading="Key Timelines" darkBackground={true}>
          <Timeline />
        </SectionWithHeading>
        <section className="bg-gray-900 border-t border-b border-gray-700 relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <div className="ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 flex items-center justify-between">
                    <h2 className="font-bold text-2xl lg:text-6xl text-primary-500 leading-tight ">
                      How to apply?
                    </h2>
                    <div>
                      <a
                        id="apply-button-how-to-apply"
                        href="https://www.pupilfirst.school/courses/1802"
                        target="_blank"
                        className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                      >
                        Start by applying to WD101 now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4 pb-10 lg:pb-20 ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-4xl text-white tracking-tight pt-1 lg:text-lg ">
                  <p>
                    Your admission to the minor degree programme is based solely
                    on{" "}
                    <span className="bg-yellow-300 text-gray-900">
                      demonstration of learning interest by completing Web
                      Development 101 course
                    </span>{" "}
                    and not any prior knowledge or marks.
                  </p>
                </div>

                <div className="sm:rounded-lg mt-8 bg-white p-8">
                  <div className="flex gap-4 items-center">
                    <p className="text-lg font-semibold flex">
                      LITE Batch#02 Institutions
                    </p>
                    <div className="max-w-fullf flex-1 h-1 border-t-2 border-gray-200"></div>
                  </div>
                  <p className="pt-2 text-gray-600">
                    To start with, students from the following institutions are
                    eligible to apply for minor degree scholarships.{" "}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center px-4 py-10 gap-12">
                    <img
                      className="h-16 object-contain"
                      src="/logos/Chaitanya_Bharathi_Institute_of_Technology_Hyderabad_ko1tbr.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/G_H_Raisoni_College_of_Engineering_Nagpur_pydlgd.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/G.Narayanamma_Institute_of_Technology_and_Science_For_Women_JNTUH_Hyderabad_mw4dpi.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Malla_Reddy_College_of_Engineering_and_Technology_Hyderabad_uhmeh3.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Marwadi University.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Institute_of_Aeronautical_Engineering_Hyderabad_yfvmpb.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Pimpri_Chinchwad_College_of_Engineering_PCCoE_Pune_xsgv1f.webp"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Vardhaman_College_of_Engineering_Shamshabad_rxs2mh.jpg"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/University of Engineering and Management, Jaipur.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Sreyas_Institute_of_Engineering_and_Technology_lgccdo.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Sankalchand_Patel_College_of_Engineering_Visnagar_bxsrst.png"
                      alt=""
                    />
                    <img
                      className="h-16 object-contain"
                      src="/logos/Tula_s_Institute_Dehradun_wxryss.png"
                      alt=""
                    />
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p>
                      If your institution is not listed,
                      <a
                        target="_blank"
                        className="font-medium underline text-indigo-500 hover:text-indigo-700"
                        href="https://pupilfirst.typeform.com/to/emhYCQeU"
                      >
                        register your interest here
                      </a>{" "}
                      Many institutions are in the{" "}
                      <a
                        target="_blank"
                        className="font-medium underline text-indigo-500 hover:text-indigo-700"
                        href="https://learn.pupilfirst.org/approval_status"
                      >
                        approval process
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <div className="border-t border-gray-700 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-white p-6 rounded-lg bg-gray-700">
              <h4>Important</h4>
              <ul className="list-disc ml-4">
                <li className="mt-4">
                  Students can apply and get onboarded to the WD101 course
                  between 24 August 2022 to 16 September 2022. We recommend that
                  you submit your application earlier, in order to give yourself
                  more time to complete the WD101 course.
                </li>
                <li className="mt-4">
                  Students who are not keeping up with the course work within
                  the set timelines and if you have not submitted any work in
                  WD201 course for a consecutive period of three weeks shall be
                  dropped out from the course and will lose their scholarship.
                  This scholarship seat shall be restored to the overall pool,
                  and a new student will be admitted from the wait-list.
                </li>
              </ul>
            </div>
            <div className="p-12 rounded-lg bg-indigo-500 flex flex-col items-center text-center gap-6 mt-12">
              <h4 className="text-white text-xl md:text-3xl font-semibold mt-8 w-full md:w-4/5">
                Admissions open for 10,000 Minor Degree Scholarships in Web
                Development.
              </h4>
              <a
                id="apply-button-footer-cta"
                href="https://www.pupilfirst.school/courses/1802"
                target="_blank"
                className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-primary-500 text-indigo-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-primary-400 hover:text-indigo-700 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
              >
                Start by applying to WD101 now
              </a>
            </div>
            <div className="text-white mt-12">
              <h4>Code of Conduct</h4>
              <p>
                Students shall adhere to the{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  target="_blank"
                  href="https://coc.pupilfirst.school/"
                >
                  Code of Conduct
                </a>{" "}
                and provide only truthful information. Any discrepancies shall
                lead to withdrawal of scholarship and being dropped from the
                course.
              </p>
              <h4 className="mt-6">Questions?</h4>
              <p>
                Please refer to the{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  target="_blank"
                  href="https://docs.google.com/document/d/e/2PACX-1vQ2Jmh0NlPAxF9BUcwTd5ICairSO88IwwzL0VOWhCDyCFQYYo6W1rvOq4YH84KH7ltSV9e8Oo80L3FJ/pub"
                >
                  Frequently Asked Questions (FAQ) document,
                </a>{" "}
                as you will find the answers to the questions most commonly
                asked by students. If you still need help, please get in touch
                with your faculty, who shall reach out to us.
              </p>
            </div>
          </div>
        </div>

        {/* <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-2xl text-primary-500 lg:text-6xl leading-tight ml-4 lg:mx-auto">
                  Beginner to advanced courses
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-5xl mt-4">
                  <p className="font-mono tracking-tight text-white lg:text-lg">
                    This programme is designed with 4 courses such that selected
                    institutions can offer a 20 credit “Minor Degree in Advanced
                    Web Development” through their trained faculty to students.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-primary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">
                      WD 101
                    </p>
                    <p className="text-white leading-snug mt-1">
                      <span className="font-semibold">Beginner</span> - Getting
                      started with Javascript.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-primary-700"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-indigo-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-indigo-400 text-xl md:text-2xl font-bold">
                      WD 201
                    </p>
                    <p className="text-white leading-snug mt-1">
                      <span className="font-semibold">Intermediate</span> -
                      Server-side programming with Ruby on Rails.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-indigo-700"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-green-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-500 text-xl md:text-2xl font-bold">
                      WD 301
                    </p>
                    <p className="text-white leading-snug mt-1">
                      <span className="font-semibold">Advanced</span> -
                      Front-end development with React &amp; TypeScript.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-green-700"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>

                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-red-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-red-400 text-xl md:text-2xl font-bold">
                      WD 401
                    </p>
                    <p className="text-white leading-snug mt-1">
                      <span className="font-semibold"> </span> Getting ready for
                      production.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white ">
                  More advanced courses would be added to give a broader choice
                  of specialisations.
                </p>
                <div className="pt-8 lg:pt-16">
                  <img
                    className="w-full h-full object-contain mix-blend-color-dodge"
                    src="course-path/course-pathway.png"
                    alt="Course pathway"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 pt-10 lg:pt-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">
                  Advanced Industry Curriculum Approved by AICTE
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl font-mono tracking-tight space-y-6 text-white ">
                  <p className="mt-4 lg:text-lg">
                    The All India Council for Technical Education has approved
                    the curriculum created jointly by Pupilfirst and Freshworks
                    that enables{" "}
                    <a
                      href="https://lite.pupilfirst.org/"
                      className="font-semibold text-indigo-400 underline hover:bg-indigo-900 hover:bg-opacity-50 transition"
                      target="_blank"
                    >
                      LITE approved institutions
                    </a>{" "}
                    to offer advanced web development courses using typed
                    functional programming.
                  </p>
                  <p className="mt-4 lg:text-lg">
                    Most modern programming languages widely used in the
                    industry are converging towards this paradigm by adopting
                    its features like types, discriminated unions, and immutable
                    programming.
                  </p>
                  <p className="mt-4 lg:text-lg">
                    In our knowledge, courses on functional programming are
                    currently taught in India at IIT-Madras, IIT-Bombay,
                    IIT-Kanpur and IIT-Mandi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-6xl 2xl:max-w-7xl mx-auto lg:ml-8 xl:ml-12 px-4 2xl:ml-32 2xl:pl-0 font-bold text-2xl text-primary-500 lg:text-6xl leading-tight ml-4 lg:mx-auto">
                  Gain Professional Skills
                </h2>
              </div>
              <div className="max-w-6xl 2xl:max-w-7xl mx-auto lg:ml-8 xl:ml-12 2xl:ml-32 pl-4 2xl:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    The courses are arranged to enable you to gain professional
                    skills used everyday in the web development industry.
                  </p>
                </div>
                <div className="lg:grid grid-cols-12 gap-x-10 gap-y-32 2xl:gap-y-64 lg:pt-32 relative">
                  <div className="col-span-6 text-white pt-10 lg:pt-24">
                    <p className="text-gray-400 font-semibold">
                      A good web developer is...
                    </p>
                    <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
                      <span className="text-primary-500">_</span>an artist
                    </h3>
                    <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                      Learn to see the beauty in code, and to write elegant
                      code: Your code doesn't just solve a problem - it's
                      something you create. Just like writing a story, or a
                      poem, you're unlikely to get it right the first time.
                      Learn the art of refactoring - how to go over your code
                      repeatedly, making incremental improvements. It might end
                      up doing the same thing at the end, but it'll read better
                      while doing it.
                    </p>
                  </div>
                  <div className="col-span-6 pt-12 lg:pt-0">
                    <img
                      className="w-full h-full object-contain"
                      src="professional-skills/artist.svg"
                      alt="artist"
                    />
                  </div>

                  <div className="col-span-6 text-white pt-24">
                    <p className="text-gray-400 font-semibold">
                      A good web developer is...
                    </p>
                    <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
                      <span className="text-primary-500">_</span>a good
                      communicator
                    </h3>
                    <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                      Learn how to ask technical questions, and how to answer
                      them: Coding isn't a solo journey. You're going to get
                      stuck a lot, and the easiest way to get unstuck is to ask
                      someone who knows better. There's a skill to asking
                      questions well, though. And once you know something, you
                      can help others out - there's a certain skill to answering
                      questions as well.
                    </p>
                    <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                      Learn how to talk to your peers fluently through your
                      code: In your career, you're going to work with many
                      others. A good programmer knows how to write code so that
                      it can be read, understood, and appreciated by those who
                      work with them.
                    </p>
                  </div>
                  <div className="col-span-6 pt-12 lg:pt-0">
                    <img
                      className="w-full h-full object-contain"
                      src="professional-skills/good-communicator.svg"
                      alt="good communicator"
                    />
                  </div>

                  <div className="col-span-6 text-white pt-24">
                    <p className="text-gray-400 font-semibold">
                      A good web developer is...
                    </p>
                    <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
                      <span className="text-primary-500">_</span>persistent
                    </h3>
                    <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                      Learn how to interpret error messages: Seeing error
                      messages is a part and parcel of life as a developer. You
                      shouldn't be dismayed when you see an error message though
                      - it's just the computer trying to tell you that something
                      went wrong, and that it needs some help. You'll need time
                      and patience to get used to these messages, and to get to
                      the root of the issue.
                    </p>
                  </div>
                  <div className="col-span-6 pt-12 lg:pt-0">
                    <img
                      className="w-full h-full object-contain"
                      src="professional-skills/persistent.svg"
                      alt="persistent"
                    />
                  </div>

                  <div className="col-span-6 text-white pt-24">
                    <p className="text-gray-400 font-semibold">
                      A good web developer is...
                    </p>
                    <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
                      <span className="text-primary-500">_</span>curious
                    </h3>
                    <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                      We can never teach you everything that goes into web
                      development. There's just too much to teach. We can,
                      however, teach you how to continue learning on your own.
                    </p>
                  </div>
                  <div className="col-span-6 pt-12 lg:pt-0">
                    <img
                      className="w-full h-full object-contain"
                      src="professional-skills/curious.svg"
                      alt="curious"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 border-t border-b border-gray-700 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  Qualify as a <br /> Teaching Assistant
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    If you are among the top performers in this course, you’ll
                    stand a chance to engage future batches as a Teaching
                    Assistant (TA). As a TA, you’ll be working closely with the
                    industry experts and the Pupilfirst to meaningfully deliver
                    learning for students in future batches. The National goal
                    of All India Council for Technical Education, under which
                    all the engineering colleges in India are affiliated is to
                    eventually{" "}
                    <a
                      className="font-semibold text-indigo-400 underline hover:bg-indigo-900 hover:bg-opacity-50 transition"
                      href="https://lite.pupilfirst.org/letter-from-VCM/Letter-from-the-VCM-AICTE.pdf"
                      target="_blank"
                    >
                      take this course to 2.4Crore students
                    </a>{" "}
                    over many years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  Contribute to <br />
                  Global Digital Corps
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    Before this minor degree program reached you, it was taught
                    to 24 students selected from 50,482 applications across 2437
                    institutions. With the skills gained, 14 students qualified
                    for a six month internship programme with CoronaSafe Network
                    and their open-source contributions has been recognised by
                    the United Nations as a global Digital Public Good.
                  </p>
                  <p className="mt-4 font-mono tracking-tight">
                    The top performers from each institution would have an
                    opportunity to work along with eGovernments Foundation
                    co-founded by Nandan Nilekani and Srikanth Nadhamuni
                    (Founding CTO of Aadhaar) and get admitted to the{" "}
                    <a
                      className="font-semibold text-indigo-400 underline hover:bg-indigo-900 hover:bg-opacity-50 transition"
                      href="https://gdc.network/"
                      target="_blank"
                    >
                      Global Digital Corps programme.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  Feedback
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    Here's what some of our students had to say
                  </p>
                </div>
                <div className="divide-y space-y-12 lg:space-y-24 divide-gray-700 relative">
                  <div className="lg:grid grid-cols-12 gap-x-10">
                    <div className="col-span-6 text-white lg:pt-24">
                      <div className="sticky top-0 pt-16">
                        <p className="text-sm font-semibold uppercase text-gray-500">
                          Question 1
                        </p>
                        <h3 className="text-indigo-400">
                          On the course content:
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-6 pt-8 lg:pt-24 space-y-8 lg:space-y-12">
                      <div className="bg-red-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The course content was sophisticated for beginners
                          like me, as it broadly covered the absolute basics of
                          the front-end like Ruby programming and OOP at first,
                          followed by content relating to back-end development.
                        </p>
                        <p className="mt-6 font-bold">
                          - Tanya Rampal
                          <span className="block italic font-medium text-sm pl-3">
                            (WD201 May-July 2021, Teaching Assistant <br />-
                            LITE Batch 1)
                          </span>
                        </p>
                      </div>
                      <div className="bg-red-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          It was very much easy to progress through the course
                          and it was designed in a way that it helps me learn a
                          new language and improves my personal interests to do
                          independent research on the source Code of Ruby on
                          Rails and the way it works. I have never done this in
                          any of my other learnings. It was an awesome time
                          going through the course.
                        </p>
                        <p className="mt-6 font-bold">
                          - Shri Hari L
                          <span className="block italic font-medium text-sm pl-3">
                            (CoronaSafe Engineering Fellowship Programme,
                            Jan-March 2021)
                          </span>
                        </p>
                      </div>

                      <div className="bg-red-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The courses helped me greatly in learning good web
                          development practices and functional programming
                          concepts. I also learnt how to develop a good backend
                          system and also about React, which proved really
                          helpful in my internship.
                        </p>
                        <p className="mt-6 font-bold">
                          - Apurva Nagar
                          <span className="block italic font-medium text-sm pl-3">
                            (CoronaSafe Engineering Fellowship Programme,
                            Jan-March 2021)
                          </span>
                        </p>
                      </div>
                      <div className="bg-red-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The knowledge I gained during the course helped me
                          while I was doing my internship project, and continues
                          to do so even now. The tech stack used here is
                          different but the basic concepts and patterns are
                          similar if not same. I am really grateful for having
                          been a part of this course and community. Thank you :)
                        </p>
                        <p className="mt-6 font-bold">
                          - Mahendra Kennedy
                          <span className="block italic font-medium text-sm pl-3">
                            (SASTRA July-Dec 2019)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid grid-cols-12 gap-x-10">
                    <div className="col-span-6 text-white lg:pt-24">
                      <div className="sticky top-0 pt-16">
                        <p className="text-sm font-semibold uppercase text-gray-500">
                          Question 2
                        </p>
                        <h3 className="text-indigo-400">
                          On the course management done by Pupilfirst:
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-6 pt-8 lg:pt-24 space-y-8 lg:space-y-12">
                      <div className="bg-green-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The feedback from my perspective is the BEST part of
                          the course. I loved all my feedback and it helped
                          sustain my learning curve.
                        </p>
                        <p className="mt-6 font-bold">
                          - Aravind Kannan Rathinasabapathi
                          <span className="block italic font-medium text-sm pl-3">
                            (WD201 May-July 2021, Intern - CitiBank)
                          </span>
                        </p>
                      </div>
                      <div className="bg-green-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The team is very sincere and I like the ways that they
                          manage time. The course calendar was really helpful as
                          well.
                        </p>
                        <p className="mt-6 font-bold">
                          - Mohd Saad
                          <span className="block italic font-medium text-sm pl-3">
                            (WD201 May-July 2021, Teaching Assistant <br />-
                            LITE Batch 1)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid grid-cols-12 gap-x-10">
                    <div className="col-span-6 text-white lg:pt-24">
                      <div className="sticky top-0 pt-16">
                        <p className="text-sm font-semibold uppercase text-gray-500">
                          Question 3
                        </p>
                        <h3 className="text-indigo-400">
                          On learning using Pupilfirst platform
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-6 pt-8 lg:pt-24 space-y-8 lg:space-y-12">
                      <div className="bg-indigo-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The UI is really good and the Pupilfirst LMS is easy
                          to use.
                        </p>
                        <p className="mt-6 font-bold">
                          - Ayush Vijayant
                          <span className="block italic font-medium text-sm pl-3">
                            (WD201 May-July 2021)
                          </span>
                        </p>
                      </div>
                      <div className="bg-indigo-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p>
                          The Pupilfirst LMS was very easy to use. I like that
                          it is easy to track all the levels and assignments
                          that have been done.
                        </p>
                        <p className="mt-6 font-bold">
                          - Sandra Kakkarayil Jayakum
                          <span className="block italic font-medium text-sm pl-3">
                            (CoronaSafe Engineering Fellowship Programme,
                            Jan-March 2021)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid grid-cols-12 gap-x-10">
                    <div className="col-span-6 text-white lg:pt-24">
                      <div className="sticky top-0 pt-16">
                        <h3 className="text-indigo-400">
                          On improvement at JavaScript :
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-6 pt-8 lg:pt-24 space-y-8 lg:space-y-12">
                      <div className="bg-yellow-100 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p className="font-bold">LITE Faculty Batch 1</p>
                        <p className="pt-2">
                          In this batch, 77% faculty members mentioned that they
                          got much better at JavaScript as compared to the
                          beginning of the WD101 course.
                        </p>
                        <div className="bg-gray-200 shadow-inner w-full h-12 rounded-lg mt-4">
                          <div className="flex justify-center items-center shadow-lg text-green-900 text-center font-semibold bg-green-500 h-12 rounded-l-lg w-[77%]">
                            <p> 77%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid grid-cols-12 gap-x-10">
                    <div className="col-span-6 text-white lg:pt-24">
                      <div className="sticky top-0 pt-16">
                        <h3 className="text-indigo-400">
                          On improvement at back-end web development:
                        </h3>
                      </div>
                    </div>
                    <div className="col-span-6 pt-8 lg:pt-24 space-y-8 lg:space-y-12">
                      <div className="bg-pink-200 lg:text-lg font-medium rounded-xl p-8 lg:p-12">
                        <p className="font-bold">WD201 May-July 2021 Batch</p>
                        <p className="pt-2">
                          In this batch, 91% students mentioned that they got
                          much better at back-end web development as compared to
                          the beginning of the WD201 course.
                        </p>
                        <div className="bg-gray-200 shadow-inner w-full h-12 rounded-lg mt-4">
                          <div className="flex justify-center items-center shadow-lg text-green-900 text-center font-semibold bg-green-500 h-12 rounded-l-lg w-[91%]">
                            <p>91%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  Expand Your <br />
                  Career Choices
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    Students who have graduated from the minor degree track
                    shall possess skills that are at the cutting edge of the
                    modern software industry. As COVID-19 accelerated digital
                    transformation and remote work, you shall gain skills for
                    global employment opportunities or start your own technology
                    startup.
                  </p>
                  <p className="mt-4 font-mono tracking-tight">
                    As the world is transitioning into a knowledge economy, the
                    demand for web development engineers who are able to build
                    web applications on the internet is outpacing the supply.
                    The venture capital investments in India is also on the rise
                    enabling new startups to emulate the success of Freshworks.
                  </p>
                  <p className="mt-4 font-mono tracking-tight">
                    With the skills gained, the choice is yours to take up a
                    job/ do research/study further/build a startup and lead a
                    fulfilling life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  Gain a Wider <br />
                  Alumni Network
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    Successful graduate students shall be invited to join an
                    alumni network connecting you with peers from over 50
                    institutions who have learnt along with you as a Community.
                    As the years pass by, these fellow engineers would be able
                    to open up more professional opportunities to advance your
                    career.
                  </p>
                </div>
                <img
                  className="w-full h-full object-contain mt-8 rounded-xl shadow-lg"
                  src="stats-map/LITE-50-Faculty-List.png"
                  alt="LITE 50 Faculty List"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-5xl font-bold text-primary-500 text-2xl lg:text-6xl lg:leading-tight ml-4 lg:mx-auto">
                  How to Apply?
                </h2>
              </div>
              <div className="max-w-5xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl space-y-6 text-white ">
                  <p className="mt-4 font-mono tracking-tight lg:text-lg">
                    All students who wish to apply for the Minor Degree in
                    Advanced Web Development may contact LITE Faculty
                    Coordinator at their institution for details.
                  </p>
                </div>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vSVFaCSJp9_NuHFBlMfQJxwa_S8Da1cxVbaQFfxOQ01PvoX8JVa86iAMn6p3ukGo4cGRNWFrFUdDoc1/pub"
                  target="_blank"
                  className="inline-flex items-center space-x-4 mt-4 w-full py-3 text-indigo-400 rounded-md text-lg font-semibold hover:underline hover:shadow-xl transition "
                >
                  <span>See list of Institutions and Faculty Coordinators</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vQAWmQAJwBVVW40phmsR_A3iZQBEw0nK9vF_L8kIsBfCc_79ERcdVfpjsolloUymkLST7NU1se3Jy40/pub"
                  target="_blank"
                  className="inline-flex justify-between items-center space-x-4 mt-12 w-full p-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-400 rounded-lg text-lg font-semibold shadow-lg hover:underline hover:shadow-xl transition "
                >
                  <span>Frequently Asked Questions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
                <div className="mt-16">
                  <h3 className="text-3xl text-indigo-500">Questions?</h3>
                  <p className="text-white pt-4">
                    Please contact the LITE Faculty Coordinator of your
                    institution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="bg-gray-800 p-4 lg:p-10 border-t border-gray-700">
            <p className="max-w-5xl font-bold text-indigo-500 text-center text-xl lg:text-3xl lg:leading-tight lg:mx-auto">
              LITE - Creating a Culture of Teaching Excellence
            </p>
          </div>
        </section> */}
      </main>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      data: hiringNetworkData,
    },
  };
}
