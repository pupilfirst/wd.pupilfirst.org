import Head from "next/head";
import {useState, useEffect} from "react";

let illustrations = [
  {
    id: "ps1",
    src:"/professional-skills/artist.svg"
  },
  {
    id: "ps2",
    src:"/professional-skills/good-communicator.svg"
  },
  {
    id: "ps3",
    src:"/professional-skills/persistent.svg"
  },
  {
    id: "ps4",
    src:"/professional-skills/curious.svg"
  },
]

const P = [
  {
    id: "ps1",
    imgSrc: "/professional-skills/artist.svg",
    title: "A good web developer is...",
    heading: "an artist",
    description: "Learn to see the beauty in code, and to write elegant code: Your code doesn't just solve a problem - it's something you create. Just like writing a story, or a poem, you're unlikely to get it right the first time. Learn the art of refactoring - how to go over your code repeatedly, making incremental improvements. It might end up doing the same thing at the end, but it'll read better while doing it.",
  },
  {
    id: "ps2",
    imgSrc: "/professional-skills/good-communicator.svg",
    title: "A good web developer is...",
    heading: "a good communicator",
    description: "Learn how to ask technical questions, and how to answer them: Coding isn't a solo journey. You're going to get stuck a lot, and the easiest way to get unstuck is to ask someone who knows better. There's a skill to asking questions well, though. And once you know something, you can help others out - there's a certain skill to answering questions as well. \n Learn how to talk to your peers fluently through your code: In your career, you're going to work with many others. A good programmer knows how to write code so that it can be read, understood, and appreciated by those who work with them.",
  },
  {
    id: "ps3",
    imgSrc: "/professional-skills/persistent.svg",
    title: "A good web developer is...",
    heading: "persistent",
    description: "Learn how to interpret error messages: Seeing error messages is a part and parcel of life as a developer. You shouldn't be dismayed when you see an error message though - it's just the computer trying to tell you that something went wrong, and that it needs some help. You'll need time and patience to get used to these messages, and to get to the root of the issue.",
  },
  {
    id: "ps4",
    imgSrc: "/professional-skills/curious.svg",
    title: "A good web developer is...",
    heading: "curious",
    description: "We can never teach you everything that goes into web development. There's just too much to teach. We can, however, teach you how to continue learning on your own.",
  },
]

const ProfessionalSkill = ({title, heading, description, id, imgSrc}) => {
  return (
    <div className="flex flex-col items-center md:block">
      <div className="block md:hidden mt-20">
        <img src={imgSrc} alt={title + "" + heading} />
      </div>
      <div className="text-white pt-8 md:pt-24" id={id}>
        <p className="text-gray-400 font-semibold">
          {title}
        </p>
        <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
          <span className="text-primary-500">_</span>{heading}
        </h3>
        <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
          {description}
        </p>
      </div>
    </div>
  )
}

const ProfessionalSkillIllustration = ({id, src, activeIllustration}) => {
  return (
    <>
      <img className={`absolute top-8 left-08 ${id === activeIllustration ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-300`} src={src} alt="Artist" />
    </>
  )
}



export default function ProfessionalSkills(props) {

  const [activeIllustration, setActiveIllustration] = useState(illustrations[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveIllustration(entry.target.id);
        }
      }
      )
    }
    , { rootMargin: "-8px 0px -98% 0px"}
    );
    illustrations.forEach(illustration => {
      observer.observe(document.getElementById(illustration.id));
    }
    );
  }
  , []
  );


  return (
    <div className="bg-gray-900">
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
      <section>
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
              <div className="lg:grid grid-cols-12 gap-x-10 gap-y-32 2xl:gap-y-64 pt-8 lg:pt-32 relative">
                <div className="col-span-6 md:pb-96">
                  {
                    P.map((skill) => {
                      return (
                        <ProfessionalSkill
                          key={skill.id}
                          title={skill.title}
                          heading={skill.heading}
                          description={skill.description}
                          id={skill.id}
                          imgSrc={skill.imgSrc}
                        />
                      )
                    }
                    )
                  }
                </div>
                <div className="col-span-6 pt-12 lg:pt-0 text-white hidden md:block">
                <div className="sticky top-0"> 
                  <div className="relative p-8">
                    {illustrations.map((illustration) => {
                      return (
                        <ProfessionalSkillIllustration
                          key={illustration.id}
                          id={illustration.id}
                          src={illustration.src}
                          activeIllustration={activeIllustration}
                        />
                      )})
                    }
                  </div>
                </div>
                </div>
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
      </section>
    </div>
  );
}
