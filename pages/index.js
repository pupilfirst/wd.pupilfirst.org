/** @format */

import Head from "next/head";
import React, { useState } from "react";
import LearnerShowcase from "../components/LearnerShowcase";
import PersonalizedLearningExperiece from "../components/PersonalizedLearningExperience";
import ProvenPathwaySection from "../components/ProvenPathwaySection";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import hiringNetworkData from "./../data/hiring-network.json";
import facultyMembersData from "./../data/faculty-members.json";

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

// let facultyMember = (index, name, imgSrc, designation, institute) => {
//   return (
//     <div key={index} className="flex flex-col items-center text-center">
//       <div className="w-32 h-32 rounded-full object-cover overflow-hidden">
//         <img
//           className="w-32 h-32 rounded-full object-cover overflow-hidden"
//           src={imgSrc}
//           alt={"Photo of" + name}
//         />
//       </div>
//       <p className="mt-4 font-semibold text-white">{name} </p>
//       <p className="text-gray-200 pt-1.5">{designation}</p>
//       <p className="text-gray-400 text-xs">{institute}</p>
//     </div>
//   );
// };

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
  const [showHiringLess, setShowHiringLess] = useState(false);
  const hiringNetwork = showHiringLess
    ? props.hiringNetwork
    : props.hiringNetwork.slice(0, 10);

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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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
      <main className="bg-gradient-to-br from-gray-800 to-gray-900 mx-auto overflow-x-hidden">
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
                className="w-16 p-2 bg-white rounded-full md:w-24"
                src="logos/atal.png"
                alt="Logo of All India Council for Technical Education (AICTE)Training And Learning"
              />
            </div>
          </header>
          <div className=" pb-4 px-4 xl:px-0">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex gap-8 xl:gap-12 items-center">
              <div className="z-10 flex-1 flex flex-col items-center text-center md:text-left md:items-start">
                <h1 className="text-primary-500 text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl py-2 font-extrabold lg:leading-tight xl:leading-tight">
                  <span className="block text-lg md:text-xl pb-2">
                    4.5 Million Jobs in GCC industry by 2030.<sup>*</sup>
                  </span>{" "}
                  Join the LITE Advanced Web Development Program, that opens the
                  gateway for new opportunities!
                </h1>
                <p>
                  <a
                    className="italic text-sm underline text-gray-300 hover:text-primary-500"
                    href="https://assets.ey.com/content/dam/ey-sites/ey-com/en_in/topics/consulting/gcc/2023/06/ey-future-of-gccs-in-india-a-vision-2030.pdf"
                    target="_blank no-referrer"
                  >
                    *Source: Future of GCCs in India - A vision 2030
                  </a>
                </p>
                <p className="pr-2 mt-4 text-lg text-white leading-relaxed font-semibold">
                  Admissions now open for the 10<sup>th</sup> cohort of LITE
                  Advanced Web Development program (WD10Y23). 7637 scholarships
                  are available for taking the course(s) as a{" "}
                  <span className="bg-yellow-300 text-gray-900">
                    Minor Degree or as Open Electives
                  </span>{" "}
                  in{" "}
                  <a
                    className="text-secondary-400 underline hover:text-secondary-300"
                    href="https://drive.google.com/file/d/1di0o5i8ZmI03j4bicWlKSMSeYHpeFjvA/view"
                    target="_blank"
                  >
                    LITE Advanced Web Development.
                  </a>{" "}
                </p>

                <div className="flex gap-4 items-start w-full md:w-auto mt-6 md:mt-12">
                  <a
                    href="https://apply.pupilfirst.org/apply/forms/6"
                    target="_blank"
                    className="flex justify-center w-full md:w-auto space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                  >
                    Apply now for learning JavaScript (WD 101)
                  </a>

                  <svg
                    width="56"
                    height="40"
                    viewBox="0 0 56 40"
                    fill="none"
                    className="hidden md:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_160_5)">
                      <path
                        d="M54.9404 1.94461C55.1491 1.43327 54.9038 0.849574 54.3924 0.640897C53.8811 0.43222 53.2974 0.677579 53.0887 1.18892L54.9404 1.94461ZM53.0887 1.18892C50.0573 8.61712 45.8369 17.8705 38.0922 24.2444C30.4149 30.5627 19.1337 34.1583 1.71876 29.9693L1.25102 31.9139C19.1769 36.2258 31.1274 32.5666 39.3631 25.7886C47.5314 19.0662 51.9054 9.38168 54.9404 1.94461L53.0887 1.18892Z"
                        fill="white"
                      />
                      <path
                        d="M8.90294 25.1151L2.07899 30.4112C1.6531 30.7418 1.56588 31.3504 1.88179 31.7872L6.71798 38.4746"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_160_5">
                        <rect width="56" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex-1 py-12 lg:pt-0 pb-12 hidden md:block">
                <img
                  className="absolute object-contain max-w-xl xl:max-w-3xl 2xl:max-w-4xl left-1/2 right-0 top-0 z-0"
                  src="hero/hero.webp"
                  alt="Illustration of female graduate student."
                />
              </div>
            </div>
          </div>
          <section className="px-4 xl:mx-0 pb-10 md:pb-16 pt-16 relative z-10">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-16 pb-16 pt-10 bg-white rounded-lg flex items-center flex-col">
              <p className="text-lg md:text-2xl text-center font-bold">
                Scholarships supported by
              </p>
              <div className="w-full flex flex-wrap gap-10 items-center lg:justify-between mt-12">
                <img src="/logos/msdf-logo.png" alt="" />
                <img src="/logos/schmidt-futures.png" alt="" />
                <img src="/logos/ACT-Logo.png" alt="" />
                <img src="/logos/sgf-logo.png" alt="" />
                <img src="/logos/meta-logo.png" alt="" />
              </div>
            </div>
          </section>
          <section className="px-4">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center p-4 bg-gray-100 rounded-lg flex items-center flex-col">
              <h2 className="text-lg md:text-2xl font-bold pt-4">
                Students from 17 Institutes have already availed scholarships in
                our previous cohorts and are taking the course(s) successfully.
              </h2>
              <img
                className="object-cover w-full h-full"
                src="/map/Map-LITE-institutes-AY-2022-23.webp"
                alt="Map illustrating students from 18 Institutes who have already availed scholarships in previous cohorts."
              />
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
          <div className="px-4 lg:px-0 pb-12 max-w-6xl 2xl:max-w-7xl mx-auto relative pt-16">
            <h2 className="text-lg md:text-2xl font-bold text-white py-4">
              <span className="text-primary-500">Watch the video</span> to see
              the new teaching-learning experience using a learner-centred model
              following the NEP 2020 guidelines.
            </h2>

            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-xl shadow-2xl border-2 border-gray-900"
                src="https://player.vimeo.com/video/814873471?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Pupilfirst Adhyayana (Teaching-Learning Cycle)"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <div className="px-4 lg:px-0 py-1 max-w-6xl 2xl:max-w-7xl mx-auto text-center mt-6 md:mt-12">
              <a
                id="apply-button-below-video"
                href="https://apply.pupilfirst.org/apply/forms/6"
                target="_blank"
                className="inline-flex justify-center space-x-3 p-3 lg:px-6 lg:py-3.5 text-gray-900 bg-yellow-400 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
              >
                Apply now for learning JavaScript (WD 101)
              </a>
            </div>
          </div>
        </section>

        <SectionWithHeading heading="Beginner to advanced courses">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            The LITE Advanced Web Development curriculum is offered to students
            as four courses that have weightage of 18-20 credits. These courses
            will impart skill competencies to students to become a full-stack
            web developer.
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
              src="course-path/course-pathway.webp"
              alt="Course pathway"
            />
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          heading="Dynamic Curriculum by Industry Experts"
          darkBackground="true"
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            Through the course journey, you will confidently, gain skill
            competencies to become a full-stack developer by learning from a
            curriculum designed and maintained by practising software
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

        <SectionWithHeading
          heading="Learner-Centered Classrooms"
          darkBackground="true"
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            You will be a part of this cohort having students across 8 states in
            India to learn via Learner-centred Classrooms following National
            Educational Policy 2020 guidelines (NEP 2020).
          </p>
          <div className="relative">
            <p className="pt-4 md:text-lg text-white">
              <span className="font-semibold md:text-indigo-400">
                Watch video
              </span>{" "}
            </p>
            <div className="hidden md:block h-6 w-6 absolute top-8 transform rotate-12 -left-6 z-10">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 43.1 85.9"
                xmlSpace="preserve"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="st0 draw-arrow__svg-path"
                  d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="draw-arrow__svg-path"
                  d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="draw-arrow__svg-path"
                  d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2 shadow-2xl rounded-xl">
            <div style={{ padding: "42.58% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-xl"
                src="https://player.vimeo.com/video/760206777?h=0b708633d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="AICTE Leadership in Teaching Excellence (LITE)  - Transformation of Classrooms to NEP 2020 Learner Centered Pedagogy"
              ></iframe>
            </div>
          </div>
        </SectionWithHeading>

        <PersonalizedLearningExperiece members={props.facultyMembers} />

        <SectionWithHeading
          heading="There is no speed limit for learning."
          darkBackground="true"
        >
          <div className="md:grid flex flex-col gap-12 md:gap-24 items-center md:grid-cols-12 mt-8 z-10">
            <div className="col-span-6">
              <div className="relative w-full gap-24 text-white px-4 md:px-12 py-8 md:py-20 bg-gray-800 rounded-2xl border-b md:border-b-0 md:border-r border-primary-600 z-10">
                <p className="text-lg md:text-2xl">
                  One student from WD08Y23 completed up to WD 201 in
                </p>
                <p className="text-4xl md:text-6xl font-semibold mt-4">
                  11 weeks.
                </p>
                <svg
                  className="absolute right-1/2 md:-right-2 rotate-90 md:rotate-0 -bottom-5 md:bottom-auto md:top-1/2 transform -translate-y-1/2 md:-translate-y-1/2"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_247_6)">
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
            <div className="col-span-6">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    WD 101 : Getting Started with JavaScript.
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  2 weeks
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    WD 201 : Server-side programming with Node.js
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  9 Weeks
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
              Your efforts to complete the curriculum to gain industry - ready
              skill competencies shall deliver a successful career.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-12 mt-8">
              <div className="col-span-1">
                <img
                  className="rounded-lg w-full "
                  src="successful-career/Arnab-Sen.jpg"
                  alt="Freshwork Academy photo"
                />
                <p className="text-white pt-2 font-semibold md:text-xl">
                  Arnab Sen
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Cohort : WD04Y22
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Role : Software Engineer
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Company : Google
                </p>
              </div>

              <div className="col-span-1">
                <img
                  className="rounded-lg w-full "
                  src="successful-career/Shailesh-Anand.jpg"
                  alt="Freshwork Academy photo"
                />
                <p className="text-white pt-2 font-semibold md:text-xl">
                  Shailesh Anand
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Cohort : WD03Y21
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Role : Technical Solutions Engineer
                </p>
                <p className="text-gray-400 pt-0.5 md:text-lg">
                  Company : Google
                </p>
              </div>
            </div>
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Growing Hiring Network">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            71 companies are currently enrolled in the hiring network.
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
              onClick={() => setShowHiringLess((prev) => !prev)}
            >
              {showHiringLess ? "Show Less" : "Show more"}
            </button>
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading="Powerful Alumni Network"
          darkBackground={true}
        >
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            Since 2016, 819 students have graduated from our courses/programmes
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
          <p className="text-lg font-medium text-gray-900">
            <span className="bg-yellow-300 px-2 py-1">
              Note: Students who complete WD 101 will be onboarded to WD 201
              course within 24 hours of completion.
            </span>
          </p>
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
                        href="https://apply.pupilfirst.org/apply/forms/6"
                        target="_blank"
                        className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                      >
                        Apply now for learning JavaScript (WD 101)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4 pb-10 lg:pb-20 ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-4xl text-white tracking-tight pt-1 lg:text-lg ">
                  <p>
                    Your admission to WD201 as a part of the minor degree or as
                    an open elective is based solely on a{" "}
                    <span className="bg-yellow-300 font-medium text-gray-900">
                      demonstration of learning interest and by completing the
                      Web Development 101 course as an interest-based admission
                      test (IBAT)
                    </span>{" "}
                    and not required of submitting any prior knowledge proof or
                    marksheets.
                  </p>
                </div>

                <div className="sm:rounded-lg mt-8 bg-white p-8">
                  <div className="flex gap-4 items-center">
                    <p className="text-lg font-semibold flex">
                      Participating Institutions
                    </p>
                    <div className="max-w-full flex-1 h-1 border-t-2 border-gray-200"></div>
                  </div>
                  <p className="pt-2 text-gray-600">
                    To start with, students from the following LITE Institutions
                    are eligible to apply.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center text-center px-4 py-10 gap-12">
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/ACE_Engineering_College.jpg"
                        alt="Logo of ACE Engineering College"
                        title="ACE Engineering College"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        ACE Engineering College
                      </figcaption>
                    </figure> */}
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-16 flex-1 object-contain object-center justify-center"
                        src="/logos/Chaitanya_Bharathi_Institute_of_Technology_Hyderabad.png"
                        alt="Logo of Chaitanya Bharathi Institute of Technology Hyderabad"
                        title="Chaitanya Bharathi Institute of Technology Hyderabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Chaitanya Bharathi Institute of Technology, Hyderabad
                      </figcaption>
                    </figure> */}
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-20 object-contain"
                        src="/logos/G_H_Raisoni_College_of_Engineering_Nagpur.png"
                        alt="Logo of G H Raisoni College of Engineering Nagpur"
                        title="G H Raisoni College of Engineering Nagpur"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        G H Raisoni College of Engineering, Nagpur
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-20 object-contain"
                        src="/logos/G_Narayanamma_Institute_of_Technology_and_Science_For_Women_JNTUH_Hyderabad.png"
                        alt="Logo of G Narayanamma Institute of Technology and Science For Women JNTUH Hyderabad"
                        title="G Narayanamma Institute of Technology and Science For Women JNTUH Hyderabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        G.Narayanamma Institute of Technology and Science For
                        Women, JNTUH, Hyderabad
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/Hindusthan_College_of_Engineering_and_Technology_Coimbatore.jpg"
                        alt="Logo of Hindusthan College of Engineering and Technology, Coimbatore"
                        title="Hindusthan College of Engineering and Technology, Coimbatore"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Hindusthan College of Engineering and Technology,
                        Coimbatore
                      </figcaption>
                    </figure>
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/Institute_of_Aeronautical_Engineering_Hyderabad.png"
                        alt="Logo of Institute of Aeronautical Engineering Hyderabad"
                        title="Institute of Aeronautical Engineering Hyderabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Institute of Aeronautical Engineering, Hyderabad
                      </figcaption>
                    </figure> */}
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-20 flex-1 object-contain"
                        src="/logos/KIT_s_College_of_Engineering.png"
                        alt="Logo of KIT's College of Engineering"
                        title="KIT's College of Engineering"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        KIT's College of Engineering
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-16 md:flex-1 object-contain"
                        src="/logos/Malla_Reddy_College_of_Engineering_and_Technology_Hyderabad.png"
                        alt="Logo of Malla Reddy College of Engineering and Technology Hyderabad"
                        title="Malla Reddy College of Engineering and Technology Hyderabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Malla Reddy College of Engineering and Technology,
                        Hyderabad
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/Pimpri_Chinchwad_College_of_Engineering_PCCoE_Pune.webp"
                        alt="Logo of Pimpri Chinchwad College of Engineering PCCoE Pune"
                        title="Pimpri Chinchwad College of Engineering PCCoE Pune"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Pimpri Chinchwad College of Engineering (PCCoE), Pune
                      </figcaption>
                    </figure>
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-28 object-contain"
                        src="/logos/Sreyas_Institute_of_Engineering_and_Technology.png"
                        alt="Logo of Sreyas Institute of Engineering and Technology"
                        title="Sreyas Institute of Engineering and Technology"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Sreyas Institute of Engineering and Technology
                      </figcaption>
                    </figure> */}
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-16 object-contain"
                        src="/logos/Vardhaman_College_of_Engineering_Shamshabad.jpg"
                        alt="Logo of Vardhaman College of Engineering Shamshabad"
                        title="Vardhaman College of Engineering Shamshabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Vardhaman College of Engineering, Shamshabad
                      </figcaption>
                    </figure> */}
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-20 object-contain"
                        src="/logos/Sankalchand_Patel_College_of_Engineering_Visnagar.png"
                        alt="Logo of Sankalchand Patel College of Engineering Visnagar"
                        title="Sankalchand Patel College of Engineering Visnagar"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Sankalchand Patel College of Engineering, Visnagar
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/Tula_s_Institute_Dehradun.png"
                        alt="Logo of Tula's Institute Dehradun"
                        title="Tula's Institute Dehradun"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Tula's Institute, Dehradun
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/BATU_logo.png"
                        alt="Dr. Babasaheb Ambedkar Technological University, Lonere"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Dr. Babasaheb Ambedkar Technological University
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-16 object-contain"
                        src="/logos/University_of_Engineering_and_Management_Jaipur.png"
                        alt="Logo of University of Engineering and Management Jaipur"
                        title="University of Engineering and Management Jaipur"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        University of Engineering and Management, Jaipur
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-12 flex-1 object-contain"
                        src="/logos/Marwadi_University.png"
                        alt="Logo of Marwadi University"
                        title="Marwadi University"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Marwadi University
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/JIS_School_Of_Polytechnic.jpg"
                        alt="JIS School Of Polytechnic, Kalyani"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        JIS School Of Polytechnic
                      </figcaption>
                    </figure>
                    <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-24 object-contain"
                        src="/logos/Goa_College_of_Engineering_logo.png"
                        alt="Goa College of Engineering, Ponda, Goa"
                        title="Goa College of Engineering, Ponda, Goa"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Goa College of Engineering, Ponda, Goa
                      </figcaption>
                    </figure>
                    {/* <figure className="flex h-full flex-col items-center justify-between">
                      <img
                        className="h-20 object-contain"
                        src="/logos/Deogiri_Institute_of_Engineering_and_Management_Studies.jpg"
                        alt="Logo of Deogiri Institute of Engineering and Management Studies, Aurangabad"
                        title="Deogiri Institute of Engineering and Management Studies, Aurangabad"
                      />
                      <figcaption className="text-center font-medium pt-2 text-xs text-gray-500">
                        Deogiri Institute of Engineering and Management Studies,
                        Aurangabad
                      </figcaption>
                    </figure> */}
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p>
                      If your institution is not listed,{" "}
                      <a
                        target="_blank"
                        className="font-medium underline text-indigo-500 hover:text-indigo-700"
                        href="https://pupilfirst.typeform.com/to/mdtFRb1y"
                      >
                        register your interest here.
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
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-white p-6 rounded-lg bg-gray-700">
              <h4>Important</h4>
              <ul className="list-disc ml-4">
                <li className="mt-4">
                  Students can apply and get onboarded to the WD101 course
                  between 20 July 2023 to 03 August 2023. We recommend that you
                  submit your application earlier in order to give yourself more
                  time to complete the WD101 course.
                </li>
                <li className="mt-4">
                  Upon completion of WD 101 successfully, students get onboarded
                  to WD 201. Students who are not keeping up with the WD 201
                  course work within the set timelines shall be moved to the
                  audit track and will lose their scholarship.
                </li>
                <li className="mt-4">
                  Students who already availed scholarship for WD 201 in any of
                  the previous LITE cohorts can take the course on a paid basis
                  in the WD10Y23 cohort. Please follow the instruction shared
                  with you from Pupilfirst over registered email ID.
                </li>
              </ul>
            </div>
            <div className="p-12 rounded-lg bg-indigo-500 flex flex-col items-center text-center gap-6 mt-12">
              <h4 className="text-white text-xl md:text-3xl font-semibold mt-8 w-full md:w-4/5">
                Application Open for LITE Minor Degree and
                <br /> Open Elective WD10Y23 Cohort.
              </h4>
              <a
                id="apply-button-footer-cta"
                href="https://apply.pupilfirst.org/apply/forms/6"
                target="_blank"
                className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-primary-500 text-indigo-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-primary-400 hover:text-indigo-700 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
              >
                Apply now for learning JavaScript (WD 101)
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
                  href="https://docs.google.com/document/d/1f9E82Q2Et-kwtBmbG-1NxQA6xHtg2N-RZX1FyzLsTOM/edit"
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
      </main>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      hiringNetwork: hiringNetworkData,
      facultyMembers: facultyMembersData,
    },
  };
}
