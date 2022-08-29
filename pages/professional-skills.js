import Head from "next/head";

export default function Home(props) {
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
              <div className="lg:grid grid-cols-12 gap-x-10 gap-y-32 2xl:gap-y-64 lg:pt-32 relative">
                <div className="col-span-6 text-white pt-10 lg:pt-24">
                  <p className="text-gray-400 font-semibold">
                    A good web developer is...
                  </p>
                  <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
                    <span className="text-primary-500">_</span>an artist
                  </h3>
                  <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                    Learn to see the beauty in code, and to write elegant code:
                    Your code doesn't just solve a problem - it's something you
                    create. Just like writing a story, or a poem, you're
                    unlikely to get it right the first time. Learn the art of
                    refactoring - how to go over your code repeatedly, making
                    incremental improvements. It might end up doing the same
                    thing at the end, but it'll read better while doing it.
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
                    them: Coding isn't a solo journey. You're going to get stuck
                    a lot, and the easiest way to get unstuck is to ask someone
                    who knows better. There's a skill to asking questions well,
                    though. And once you know something, you can help others out
                    - there's a certain skill to answering questions as well.
                  </p>
                  <p className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
                    Learn how to talk to your peers fluently through your code:
                    In your career, you're going to work with many others. A
                    good programmer knows how to write code so that it can be
                    read, understood, and appreciated by those who work with
                    them.
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
                    Learn how to interpret error messages: Seeing error messages
                    is a part and parcel of life as a developer. You shouldn't
                    be dismayed when you see an error message though - it's just
                    the computer trying to tell you that something went wrong,
                    and that it needs some help. You'll need time and patience
                    to get used to these messages, and to get to the root of the
                    issue.
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
