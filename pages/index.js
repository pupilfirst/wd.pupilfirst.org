import Head from "next/head";

function ImageWithDescription({ name, caption, role, imgSrc }) {
  return (
    <div>
      <div className="relative rounded-lg bg-gradient-to-br from-yellow-300 to-primary-400 w-5/6 md:w-auto shadow-md ">
        <img
          src={imgSrc}
          alt={caption}
          className="block w-full object-cover md:object-contain p-0.5 rounded-lg"
        />
      </div>
      <p className={"text-lg font-semibold pt-2"}>{name}</p>
      <p className={"text-sm text-gray-600 leading-tight pt-1"}>{caption}</p>
      <p>{role}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Leadership in Teaching Excellence (LITE)</title>
        <meta
          name="description"
          content="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Leadership in Teaching Excellence (LITE)"
        />
        <meta
          property="og:description"
          content="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
        />
        <meta name="theme-color" content="#FDFAF7" />
        <meta
          property="og:image"
          content="leadership-in-teaching-excellence.jpg"
        />
        <meta property="og:url" content="https://lite.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="leadership-in-teaching-excellence.jpg"
        />
        <meta
          property="og:site_name"
          content="Leadership in Teaching Excellence (LITE)"
        />
        <meta name="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence." />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6H1NS1GQNW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6H1NS1GQNW');
              `,
          }}
        />
      </Head>
      <main className="bg-primary-50 mx-auto">
        <section className="hero__bg-pattern relative">
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <a className="block" href="/">
                <img
                  className="block w-20 md:w-28"
                  src="logos/LITE-logo.svg"
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
          <div className="relative max-w-8xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-3xl md:text-5xl lg:text-7xl lg:py-4 font-extrabold lg:leading-tight">
                Minor Degree in <br />
                Advanced Web Development
              </h1>
              <p className="max-w-4xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
                The Minor Degree in Advanced Web Development Curriculum is
                approved by All India Council for Technical Education (AICTE)
                under the National Educational Alliance for Technology (NEAT)
                programme of the Ministry of Education, Government of India.
                This degree can be opted for and pursued by students who are
                enrolled in the Institutes selected as part of the Batch 1 of
                LITE programme.
              </p>
              <div className="pt-4 md:pt-8">
                <div>
                  <a
                    href="/ay-2021-22"
                    className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
                  >
                    Batch 1 Results Announced: AY 2021-22
                  </a>
                </div>
                <div className="pt-4">
                  <a
                    href="/announcement"
                    className="inline-block  underline font-medium text-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-800 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                  >
                    List of Provisionally Selected Institutions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.png"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div>
        </section>
        <section className="mx-4 xl:mx-0 pb-10 md:pb-16">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-secondary-500 relative shadow-lg max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between">
              <div className="md:w-8/12 p-4 lg:p-10">
                <h2 className="text-xl md:text-3xl">
                  In partnership with Pupilfirst
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  Pupilfirst is a founding member of National Educational
                  Alliance for Technology (NEAT) programme of the Ministry of
                  Education, that is implemented by AICTE.
                </p>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  Pupilfirst’s mission is to enable teachers to transform
                  classroom education to a learner centered model and achieve
                  near 100% learning outcomes.
                </p>
                <p className="mt-4 text-sm md:text-base">
                  Learn More at:{" "}
                  <a
                    className="text-secondary-500 font-semibold hover:underline hover:bg-secondary-50"
                    target="_blank"
                    href="https://pupilfirst.org/"
                  >
                    https://pupilfirst.org/
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-secondary-500 font-semibold hover:underline hover:bg-secondary-50"
                    target="_blank"
                    href="https://neat.aicte-india.org/"
                  >
                    https://neat.aicte-india.org/
                  </a>
                </p>
              </div>
              <div className="md:w-4/12 flex items-center justify-center flex-shrink-0 rounded-b-lg md:rounded-bl-none md:rounded-r-lg bg-gradient-to-br from-secondary-500 to-secondary-600">
                <div className="p-6 md:p-3">
                  <img
                    className="w-36 md:w-48 lg:w-64 object-contain"
                    src="logos/pupilfirst-logo-white.svg"
                    alt="Pupilfirst logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 xl:mx-0 pb-10 md:pb-16 pt-12">
          <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between">
              <div className="md:w-5/12 flex items-center justify-center flex-shrink-0">
                <div className="p-4 md:p-3 rounded-full border-2 bg-primary-100 border-primary-200 shadow-sm">
                  <img
                    className="h-72 w-72 lg:h-96 lg:w-96 object-cover rounded-full"
                    src="people/MP-Poonia.png"
                    alt="Prof MP Poonia, Vice Chairman, All India Council for Technical Education."
                  />
                </div>
              </div>
              <div className="md:w-7/12">
                <h2 className="text-base md:text-xl lg:text-2xl lg:pt-8">
                  Letter to Vice Chancellors and Head of Institutions from{" "}
                  <br />
                  Hon: Vice Chairman, AICTE
                </h2>
                <p className="mt-4 max-w-xl">
                  “We intend to upgrade selected institutions as AICTE Brand
                  Ambassadors of Change and highlight selected institutions, its
                  leadership, faculty and students as change agents who are
                  implementing proven online teaching-learning methods that are
                  aligned with NEP 2020”
                </p>
                <p className="font-semibold mt-6 text-lg">Prof MP Poonia, </p>
                <p className="italic">Vice Chairman, </p>
                <p className="italic">
                  All India Council for Technical Education.
                </p>
                <a
                  className="inline-flex items-center px-4 py-3 rounded-lg space-x-2 font-semibold bg-primary-100 text-primary-800 mt-4 md:mt-6 border border-primary-400 hover:bg-primary-50 hover:shadow-lg outline-none focus:ring focus:ring-primary-200 focus:ring-offset-1 transition"
                  href="letter-from-VCM/Letter-from-the-VCM-AICTE.pdf"
                  target="_blank"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-primary-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                      <path
                        fillRule="evenodd"
                        d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                      />
                    </svg>
                  </div>
                  <div>Read the full letter</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-snug lg:ml-28 2xl:ml-44 pl-4">
                        Everything you
                        <br /> need to know
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        What is this program?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        AICTE and Industry led specialised leadership training
                        for teachers from computer science and allied
                        departments, to teach a minor degree programme in Web
                        Development and skill their students using{" "}
                        <span className="italic">
                          learner centered pedagogy, competency based curriculum
                          and continuous assessments and professional
                          development of faculty.
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Why?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        To equip academic institutions with teaching excellence
                        in software industry standards and become an
                        aspirational benchmark for other academic institutions
                        across the country.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Who is this for?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Universities and AICTE affiliated Institutions with
                        visionary heads of institutions and committed faculty
                        from computer science and allied departments who can
                        create transformational changes as envisioned by NEP
                        2020.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        When?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Selected institutions shall sign MoUs and start faculty
                        training under AICTE guidance from August 23 2021.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Effort by Higher Educational Institutions
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Approving 20 credit “Minor in Advanced Web Development”
                        program into academic curriculum for Academic Year
                        2021-22 onwards.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Effort by Faculty
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        30 hours of highly enjoyable study spread across 45 days
                        followed by continuous learning of 30 hours through the
                        next semester.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Format
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Self-paced learning with personalised feedback from
                        industry coaches.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Assessment
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Teachers shall see diagnostic and formative assessments
                        happen to them exactly the same way they would be
                        assessing the students in future.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Certificate for Faculty
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Yes. Upon successful completion of training, both
                        institutions and teachers shall receive joint
                        certification from AICTE and Industry.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Complete Support for Course Delivery to students
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Faculty shall receive end to end support for integrating
                        the course including conducting student awareness
                        sessions, student selection process, student onboarding,
                        course delivery, continuous assessments, final
                        evaluation and graduation support for internships or
                        entrepreneurship.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        National Recognition for Institutions
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Selected institutions whose trained faculty integrate
                        the minor programme for its students shall be recognised
                        by AICTE as Institutions with Leadership in Teaching
                        Excellence.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Cost for Students and Faculty?
                      </h3>
                      <div className="ml-8 pt-1 text-sm lg:text-lg ">
                        <p>AICTE approved fees for students.</p>
                        <p>Full Scholarship for Faculty.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-white to-gray-100 rounded-r md:rounded-lg border border-gray-100 relative shadow-md">
                      <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-4 border-b border-gray-200">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="p-2 md:p-4 lg:p-5">
                        <p className="text-xl font-semibold leading-tight">
                          Leadership in Teaching Excellence (LITE)
                        </p>
                        <p className="text-xs mt-4 text-gray-500">
                          Important Dates
                        </p>
                        <div className="text-xs md:text-sm mt-2 space-y-3">
                          <div className="grid grid-cols-12 gap-2 md:gap-3">
                            <p className="col-span-4 text-secondary-500 font-medium">
                              May 26, 2021
                            </p>
                            <p className="col-span-8 flex">
                              <span className="pr-3">-</span>Applications Open
                            </p>
                          </div>
                          <div className="grid grid-cols-12 gap-2 md:gap-3">
                            <p className="col-span-4 text-secondary-500 font-medium">
                              Jun 15, 2021
                            </p>
                            <p className="col-span-8 flex">
                              <span className="pr-3">-</span>Deadline for
                              Institution registrations and Faculty
                              applications.
                            </p>
                          </div>
                          <div className="grid grid-cols-12 gap-2 md:gap-3">
                            <p className="col-span-4 text-secondary-500 font-medium">
                              Aug 02, 2021
                            </p>
                            <p className="col-span-8 flex">
                              <span className="pr-3">-</span>Announcement of
                              Selected Institutions and Faculty members.
                            </p>
                          </div>
                          <div className="grid grid-cols-12 gap-2 md:gap-3">
                            <p className="col-span-4 text-secondary-500 font-medium">
                              Aug 02-13, 2021
                            </p>
                            <p className="col-span-8 flex">
                              <span className="pr-3">-</span>Institutions to
                              send back signed MOUs.
                            </p>
                          </div>
                          <div className="grid grid-cols-12 gap-2 md:gap-3">
                            <p className="col-span-4 text-secondary-500 font-medium">
                              Aug 23, 2021
                            </p>
                            <p className="col-span-8 flex">
                              <span className="pr-3">-</span>Online Training of
                              Faculty begins.
                            </p>
                          </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                          <a
                            href="/announcement"
                            className="inline-block w-full p-3 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-center font-semibold hover:shadow-xl transition "
                          >
                            Results announced
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white bg-opacity-75 border-t border-gray-200 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                    3 Step Selection Process
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0 mt-8 pb-10 lg:pb-16">
                <div className="space-y-4 md:space-y-0 md:grid grid-cols-3 gap-4 lg:gap-8">
                  <div className="relative rounded-lg px-4 py-3 bg-gradient-to-br from-transparent to-secondary-50 border border-secondary-100">
                    <img
                      className="block w-20 md:w-28"
                      src="selection-steps/selection-step-1.svg"
                      alt="Institutes who apply are shortlisted"
                    />
                    <div className="pl-3 pt-2">
                      <p className="font-medium text-xl text-primary-500">
                        Step 1
                      </p>
                      <p className="pt-1">
                        Institutes who apply are shortlisted
                      </p>
                      <p className="absolute right-2 top-1 text-secondary-100 opacity-40 text-8xl font-extrabold">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-lg px-4 py-3 bg-gradient-to-br from-transparent to-secondary-50 border border-secondary-100">
                    <img
                      className="block w-20 md:w-28"
                      src="selection-steps/selection-step-2.svg"
                      alt="Shortlisted Institutes get link to nominate upto 5 faculties"
                    />
                    <div className="pl-3 pt-2">
                      <p className="font-medium text-xl text-primary-500">
                        Step 2
                      </p>
                      <p className="pt-2">
                        Shortlisted Institutes get link to nominate upto 5
                        faculties
                      </p>
                      <p className="absolute right-2 top-1 text-secondary-100 opacity-40 text-8xl font-extrabold">
                        2
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-lg px-4 py-3 bg-gradient-to-br from-transparent to-secondary-50 border border-secondary-100">
                    <img
                      className="block w-20 md:w-28"
                      src="selection-steps/selection-step-3.svg"
                      alt="AICTE announces the list of selected Institutes and its faculty members"
                    />
                    <div className="pl-3 pt-2">
                      <p className="font-medium text-xl text-primary-500">
                        Step 3
                      </p>
                      <p className="pt-1">
                        AICTE announces the list of selected Institutes and its
                        faculty members.
                      </p>
                      <p className="absolute right-2 top-1 text-secondary-100 opacity-40 text-8xl font-extrabold">
                        3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start lg:items-center space-x-3 bg-yellow-50 border border-yellow-400 px-4 py-3 mt-4 rounded-lg text-sm ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-primary-400 w-9 h-9"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </div>
                  <p>
                    <span className="font-medium">Important:</span> Shortlisting
                    of applications shall be on a rolling basis. Institutions
                    that meet the selection criteria on a first come first serve
                    basis shall immediately receive the url link for nominating
                    their faculty members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 bg-opacity-75 border-t border-b border-gray-200 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                    Gain Teaching Excellence
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-2xl">
                  <p className="text-sm md:text-base lg:text-lg mt-4">
                    Selected Institutions and faculty shall gain leadership in
                    teaching excellence on four key NEP 2020 goals.
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0 pb-10 lg:pb-16">
                <div className="grid grid-cols-12 gap-3 lg:gap-6 mt-6 lg:mt-10">
                  <div className="relative col-span-2 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                    <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-500 items-center justify-center absolute inset-0 transform -rotate-90">
                      NEP 2020 GOALS
                    </p>
                  </div>
                  <div className="col-span-10 grid gap-y-4 md:gap-y-8">
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">
                        1
                      </p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">
                          Enabling a{" "}
                          <span className="font-bold italic">
                            {" "}
                            learner centered model
                          </span>{" "}
                          of teaching-learning.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">
                        2
                      </p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">
                          Delivering{" "}
                          <span className="font-bold italic">
                            competency based curriculums for highly paid global
                            tech skills.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">
                        3
                      </p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">
                          Transformation of assessments{" "}
                          <span className="font-bold italic">
                            from summative to formative (continuous).
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">
                        4
                      </p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">
                          Identifying gifted school students to gain direct
                          admission to Universities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 pt-10 lg:pt-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">
                  Advanced Industry Curriculum Approved by AICTE
                </h2>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-4xl space-y-6 ">
                  <p className="mt-4 text-sm lg:text-lg">
                    AICTE expert committee has approved the curriculum created
                    jointly by Pupilfirst and Freshworks that enables
                    institutions to offer advanced web development courses using
                    typed functional programming.
                  </p>
                  <p className="mt-4 text-sm lg:text-lg">
                    Most modern programming languages widely used in the
                    industry are converging towards this paradigm by adopting
                    its features like types, discriminated unions, and immutable
                    programming.
                  </p>
                  <p className="mt-4 text-sm lg:text-lg">
                    In our knowledge, courses on functional programming are
                    currently taught in India at IIT-Madras, IIT-Bombay,
                    IIT-Kanpur and IIT-Mandi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">
                  Beginner to advanced courses
                </h2>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-4xl mt-4">
                  <p className="text-sm md:text-base lg:text-lg">
                    This programme is designed with 3 courses such that selected
                    institutions can offer a 20 credit “Minor Degree in Advanced
                    Web Development” through their trained faculty to students.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-gray-100 border border-primary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">
                      WD 101
                    </p>
                    <p className="text-sm leading-snug mt-1">
                      <span className="font-semibold">Beginner</span> - Getting
                      started with Javascript (WD 101).
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
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-gray-100 border border-secondary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-secondary-400 text-xl md:text-2xl font-bold">
                      WD 201
                    </p>
                    <p className="text-sm leading-snug mt-1">
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
                      className="text-secondary-700"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-gray-100 border border-green-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-500 text-xl md:text-2xl font-bold">
                      WD 301
                    </p>
                    <p className="text-sm leading-snug mt-1">
                      <span className="font-semibold">Advanced</span> - Typed
                      Functional programming with ReScript.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm ">
                  More advanced courses would be added to give a broader choice
                  of specialisations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 bg-opacity-75 border-t border-b border-gray-200 mx-auto relative">
          <div className=" max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">
                    Training by Industry Experts
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-4xl">
                  <p className="text-sm md:text-base lg:text-lg font-semibold mt-4">
                    The training programme shall be hosted online on the
                    Pupilfirst LMS, and delivered by Hari Gopal and Prashant
                    Reddy Koteru.
                  </p>
                  {/* <p className="text-sm md:text-base lg:text-lg mt-4">
                    Hari and Prashanth are the industry experts in web
                    development. They will be assisted by Vamsi as a teaching
                    assistant for this program in order to make it an enjoyable
                    experience for everyone involved.
                  </p> */}
                </div>
              </div>
              <svg
                className="absolute right-0 top-1/4 object-center"
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
                      className="text-gray-300"
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
              <div className="max-w-4xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 lg:gap-12 py-12 lg:pb-16">
                  <ImageWithDescription
                    name="Hari Gopal"
                    caption={<p>Chief Technology Officer, Pupilfirst</p>}
                    role={
                      <div className="text-sm leading-snug italic mt-3">
                        <div className="pb-2 font-semibold">
                          Course Author &amp; Coach
                        </div>{" "}
                        Hari is a full-stack web developer with 12 years of
                        experience. He's the CTO at Pupilfirst and leads
                        development of the Pupilfirst LMS, an open-source
                        project that blends a traditional stack (RoR) with the
                        latest and greatest tech (ReScript).
                      </div>
                    }
                    imgSrc="people/hari-gopal.png"
                  />
                  <ImageWithDescription
                    name="Prashanth Reddy Koteru"
                    caption={<p>Coach-Web Development, Pupilfirst</p>}
                    role={
                      <div className="text-sm leading-snug italic mt-3">
                        <div className="pb-2 font-semibold">Course Coach</div>{" "}
                        Prashanth is a full-stack web developer and product
                        engineer with five years of experience. He's an active
                        evangelist in the Indian developer community.
                      </div>
                    }
                    imgSrc="people/prashanth-reddy.png"
                  />
                  <ImageWithDescription
                    name="Vinil Bhandari"
                    caption={<p>Director of Engineering, NYSE</p>}
                    role={
                      <div className="text-sm leading-snug italic mt-3">
                        <div className="pb-2 font-semibold">
                          Industry Mentor
                        </div>{" "}
                        Vinil is Director of Engineering at New York Stock
                        Exchange with in-depth expertise in building highly
                        scalable software along with diverse &amp; inclusive
                        teams.
                        <p className="pt-2">
                          Vinil has been invited by the AICTE leadership team to
                          share cutting knowledge to faculty for enabling them
                          to orient students to become part of high performance
                          engineering teams.
                        </p>
                      </div>
                    }
                    imgSrc="people/vinil-bhandari.png"
                  />
                  {/* <ImageWithDescription
                    name="Bellam Vamsi Krishna"
                    caption={<>Teaching Assistant, Pupilfirst</>}
                    role={
                      <div className="text-sm leading-snug italic mt-3">
                        <div className="pb-2 font-semibold">
                          8<sup>th</sup> semester student, CSE SASTRA
                          University.
                        </div>
                        Vamsi completed the WD 201 course at SASTRA University
                        in 2019, and is currently interning at a prominent
                        software development firm in Chennai. He has also been a
                        teaching assistant for web development courses, starting
                        from 2020.
                      </div>
                    }
                    imgSrc="people/bellam-vamsi.png"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">
                    Schedule
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 relative shadow-lg divide-y divide-gray-200 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
                      May 26, 2021
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 flex">
                      <span className="pr-3">-</span> Applications Open
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
                      June 15, 2021
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 flex">
                      <span className="pr-3">-</span> Deadline for Institution
                      registrations and Faculty applications.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
                      August 02, 2021
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 flex">
                      <span className="pr-3">-</span>Announcement of Selected
                      Institutions and Faculty members.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
                      August 02-13, 2021<sup>*</sup>
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 flex">
                      <span className="pr-3">-</span> Institutions to send back
                      signed MOUs.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
                      August 23, 2021
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 flex">
                      <span className="pr-3">-</span> Online Training of Faculty
                      begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-3xl text-gray-800 leading-tight ml-4 lg:mx-auto">
                    Skills for students that enable Global Employment
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 ">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    Students who have graduated from the minor degree track
                    shall possess skills that are at the cutting edge of the
                    modern software industry. As Covid 19 accelerates digital
                    transformation and re-imagines remote work, your students
                    shall now have skills and pathways for global employment
                    opportunities as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-3xl text-gray-800 leading-tight ml-4 lg:mx-auto">
                    Recognition for Faculty as Leaders with Teaching Excellence
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 ">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    AICTE aims to scale this knowledge to 24 Million children
                    over the next few years starting with schools. This process
                    shall involve training of 100,000 teachers in modern web
                    development and programming paradigms. Successful faculty
                    from LITE shall be leaders who lead this change with AICTE.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-3xl text-gray-800 leading-tight ml-4 lg:mx-auto">
                    Your Institution as AICTE’s Brand Ambassador of Change
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 ">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    To prepare the next generation of indian students to bring
                    advanced levels of skills to the industry, we have to bring
                    our academic curriculum and teacher training from playing
                    catchup to industry to be in the front-lines of fundamental
                    improvements in computing.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    AICTE is looking to directly work with visionary
                    institutions that also share the goal to create a paradigm
                    shift in classroom teaching-learning methodologies using
                    educational technology, deploy advanced curriculums and
                    create high quality learning outcomes for students.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    Heads of institutions who want to share this vision of AICTE
                    are invited to apply for the leadership in teaching
                    excellence (LITE) program and shortlisted institutes shall
                    be informed of faculty application and next steps by email.
                    Applications would be processed on a rolling basis as
                    outlined in the three step selection process.
                  </p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h3 className="text-secondary-500 text-xl lg:text-3xl font-bold">
                    Questions?
                  </h3>
                  <p className="pt-2">
                    Email <span className="font-medium"> Col. B. Venkat,</span>{" "}
                    Director, Faculty Development Cell (AICTE) at
                    <a
                      href="mailto:director.fdc@aicte-india.org"
                      className={
                        "text-primary-800 underline pl-2 tracking-wide font-medium"
                      }
                    >
                      director.fdc@aicte-india.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                    Apply now for <br />
                    AICTE Leadership in <br />
                    Teaching Excellence Program
                  </h4>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="/announcement"
                      className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 border border-primary-700 text-primary-800 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold hover:shadow-xl transition "
                    >
                      Results announced
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
