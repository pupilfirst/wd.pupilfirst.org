import Head from "next/head";

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
          <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-0 z-10">
            <div className="text-center mx-auto pb-10 md:pb-24">
              <h1 className="hero__title-gradient text-3xl md:text-6xl max-w-3xl mx-auto text-center lg:pt-4 font-extrabold md:leading-tight">
                Leadership in <br />
                Teaching Excellence
                <p className="text-base md:text-2xl pt-2">AY 2021-22</p>
              </h1>
              <div className="text-sm md:text-lg max-w-xl text-center mx-auto">
                <p className="pt-4">
                  From amongst the 475 applications across 28 states, 136 higher
                  educational institutes across 16 states have qualified for the
                  LITE programme for Academic Year 2021-22.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/stats-hero-bg.png"
              alt="LITE - hero background image"
            />
          </div>
        </section>

        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="mx-4 xl:mx-0">
              <section className="pt-10">
                <div>
                  <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                    LITE 50 - Higher Education
                  </h3>
                  <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                    The first batch of 50 institutions for the Leadership in
                    Teaching Excellence programme represent 16 states and
                    comprises 1 Institute of Eminence, 2 State Universities, 3
                    Deemed to be Universities, 2 Private Universities, 26
                    Autonomous Colleges, 15 Affiliated Colleges and 1 Standalone
                    institution.
                  </p>
                </div>
                <div>
                  <img
                    className="h-full w-full object-cover relative"
                    src="stats-map/LITE-50-Faculty-List.png"
                    alt="LITE - hero background image"
                  />
                </div>
              </section>
              <section
                id="selected-institutions"
                className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12"
              >
                <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                  LITE 50 - Faculty List
                </h3>
                <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                  The names of two faculty members from the institutions
                  selected for training under the LITE programme are published
                  below. Training would be given for both the faculty members
                  and based on performance and successful course completion, one
                  faculty per institute would be selected as the “Faculty
                  Coordinator” for implementation of Minor Degree.
                </p>

                <div className="mt-4">
                  <p className="text-xs text-right italic">
                    Arranged as per category of institutions following state
                    wise alphabetical order.
                  </p>
                  <div className="overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
                        <table className="tabel-auto divide-y divide-gray-200">
                          <thead>
                            <tr className="text-left divide-x divide-primary-300 bg-gradient-to-r from-secondary-500 to-primary-500 whitespace-pre">
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                Sl
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                Name of Institute
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                Head of Institute
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                Names of Faculty
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                              >
                                State
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border bg-white divide-y divide-gray-200 text-sm">
                            <tr>
                              <td
                                className="px-3 py-1 bg-green-200 text-green-800 font-medium"
                                colSpan="6"
                              >
                                34 Universities and Autonomous Colleges have the
                                maximum flexibility to integrate Minor Degree
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">1</td>
                              <td className="px-4 py-2 font-medium">
                                VIT Vellore
                              </td>
                              <td className="px-4 py-2">
                                Institute of Eminence
                              </td>
                              <td className="px-4 py-2">Dr Rambabu Kodali</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Radhakrishnan Delhibabu</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">2</td>
                              <td className="px-4 py-2 font-medium">
                                J. C. Bose University of Science and Technology,
                                YMCA, Faridabad
                              </td>
                              <td className="px-4 py-2">State University</td>
                              <td className="px-4 py-2">Dr Dinesh Kumar</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Amita Arora</li>
                                  <li>Payal Gulati</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">3</td>
                              <td className="px-4 py-2 font-medium">
                                Indira Gandhi Delhi Technical University for
                                Women, Kashmere Gate
                              </td>
                              <td className="px-4 py-2">State University</td>
                              <td className="px-4 py-2">Dr Amita Dev</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. (Mrs.) Amita Dev</li>
                                  <li>Ms Charu Gupta</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                New Delhi
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">4</td>
                              <td className="px-4 py-2 font-medium">
                                Manav Rachna International Institute of Research
                                and Studies, Faridabad
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">
                                Dr Sanjay Srivastava
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Suresh Kumar</li>
                                  <li>Dr. Poonam Tanwar</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">5</td>
                              <td className="px-4 py-2 font-medium">
                                Bharath Institute of Higher Education and
                                Research
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">
                                Prof K Vijaya Bhaskar Raju
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ramesh kumar K</li>
                                  <li>Dr. Anitha Karthi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">6</td>
                              <td className="px-4 py-2 font-medium">
                                Noorul Islam Centre for Higher Education
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">Dr A K Kumaraguru</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>R Chitra</li>
                                  <li>Dr. J.R Jeba</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">7</td>
                              <td className="px-4 py-2 font-medium">
                                University of Engineering and Management, Jaipur
                              </td>
                              <td className="px-4 py-2">Private University</td>
                              <td className="px-4 py-2">
                                Dr Biswajoy Chatterjee
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Saroj Kumar</li>
                                  <li>Krishnendu Kundu</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Rajasthan
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">8</td>
                              <td className="px-4 py-2 font-medium">
                                Marwadi University, Rajkot
                              </td>
                              <td className="px-4 py-2">Private University</td>
                              <td className="px-4 py-2">Dr Sandeep Sancheti</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Damodharan Palaniappan</li>
                                  <li>Tejas Chauhan</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Gujarat
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">9</td>
                              <td className="px-4 py-2 font-medium">
                                Godavari Institute of Engineering and
                                Technology, Rajahmundry
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr. P.M.M. Subrahmanya Sarma
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Shrija Madhu</li>
                                  <li>R Tamilkodi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">10</td>
                              <td className="px-4 py-2 font-medium">
                                Raghu Engineering College, Visakhapatnam
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr. C.H. Srinivasu</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Bhavani Sankar Panda</li>
                                  <li>S Satyanarayana</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">11</td>
                              <td className="px-4 py-2 font-medium">
                                Raghu Institute of Technology, Visakhapatnam
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr. S.Satyanarayana</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. K N Brahmaji Rao</li>
                                  <li>Bhamidipati Ravi Teja</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">12</td>
                              <td className="px-4 py-2 font-medium">
                                Sri Venkateswara College of Engineering and
                                Technology, Chittoor
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr. Matam Mohan Babu
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Padavala Sai Prasad</li>
                                  <li>Dr. Velmurugan J</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">13</td>
                              <td className="px-4 py-2 font-medium">
                                Shri Shankaracharya Technical Campus (SSTC),
                                Bhilai
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr. P B Deshmukh</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Madhuri Gupta</li>
                                  <li>Neha Taori</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Chandigarh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">14</td>
                              <td className="px-4 py-2 font-medium">
                                BMS Institute of Technology &amp; Management,
                                Bengaluru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr Mohanbabu G GN</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Arunakumari B N</li>
                                  <li>Dr. Veena N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">15</td>
                              <td className="px-4 py-2 font-medium">
                                Siddaganga Institute of Technology, Tumkuru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr S V Dinesh</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pramod TC</li>
                                  <li>Sushma S A</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">16</td>
                              <td className="px-4 py-2 font-medium">
                                St. Joseph Engineering College, Mangaluru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr Rio D'Souza</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Anusha M M</li>
                                  <li>Dr. Harivinod N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">17</td>
                              <td className="px-4 py-2 font-medium">
                                Vidyavardhaka College of Engineering, Mysuru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr B Sadashive Gowda
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Hamsaveni M</li>
                                  <li>Shashank N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">18</td>
                              <td className="px-4 py-2 font-medium">
                                G H Raisoni College of Engineering, Nagpur
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr Sachin Untawale</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pranay Deepak Saraf</li>
                                  <li>Dipti Theng</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">19</td>
                              <td className="px-4 py-2 font-medium">
                                KIT's College of Engineering (Autonomous),
                                Kolhapur
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr Vilas V Karjinni</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Bhagyashri Abhay Kelkar</li>
                                  <li>Sameer Bhimrao Patil</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">20</td>
                              <td className="px-4 py-2 font-medium">
                                Pimpri Chinchwad College of Engineering (PCCoE),
                                Pune
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr Govind Narayan Kulkarni
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Shailesh Hule</li>
                                  <li>Savita Ajay Kumbhare</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">21</td>
                              <td className="px-4 py-2 font-medium">
                                Excel Engineering College, Namakkal
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr K Bommanna Raja</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ashokkumar L</li>
                                  <li>Dr. T Ravichandran</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">22</td>
                              <td className="px-4 py-2 font-medium">
                                Hindusthan College of Engineering and
                                Technology, Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr J Jaya</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Jayaraj R</li>
                                  <li>P Anitha</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">23</td>
                              <td className="px-4 py-2 font-medium">
                                Hindusthan Institute of Technology, Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr C Natarajan</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Jameer Basha A</li>
                                  <li>Lokesh S</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">24</td>
                              <td className="px-4 py-2 font-medium">
                                K.S.Rangasamy College of Technology,
                                Tiruchengode
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr R Gopalakrishnan</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Kanagaraju P</li>
                                  <li>S Madhavi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">25</td>
                              <td className="px-4 py-2 font-medium">
                                Kamaraj College of Engineering and Technology
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr Anant Achary</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. R Arthy</li>
                                  <li>T Mahara Jothi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">26</td>
                              <td className="px-4 py-2 font-medium">
                                KPR Institute of Engineering and Technology,
                                Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr M Akila</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>R Sivaramakrishnan</li>
                                  <li>Premkumar M</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">27</td>
                              <td className="px-4 py-2 font-medium">
                                R.M.K. Engineering College, Kavaraipettai
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr K A Muhamed Junaid
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. K Chidambarathanu</li>
                                  <li>Dr. B Prathusha Laxmi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">28</td>
                              <td className="px-4 py-2 font-medium">
                                SNS College of Technology, Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr S Chenthur Pandian
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sangeetha S</li>
                                  <li>V Savitha</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">29</td>
                              <td className="px-4 py-2 font-medium">
                                ACE Engineering College, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr B L Raju</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pinagadi Venkateswara Rao</li>
                                  <li>Dr. M V Vijaya Saradhi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">30</td>
                              <td className="px-4 py-2 font-medium">
                                Chaitanya Bharathi Institute of Technology,
                                Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr P Ravinder Reddy</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>S Durga Devi</li>
                                  <li>Srikanth R</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">31</td>
                              <td className="px-4 py-2 font-medium">
                                G.Narayanamma Institute of Technology and
                                Science For Women, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr K Ramesh Reddy</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>M Lalitha</li>
                                  <li>Manthena Deepthi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">32</td>
                              <td className="px-4 py-2 font-medium">
                                Institute of Aeronautical Engineering, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                Dr L V Narasimha Prasad
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>E Krishna Rao Patro</li>
                                  <li>B Padmaja</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">33</td>
                              <td className="px-4 py-2 font-medium">
                                Vardhaman College of Engineering, Shamshabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr J V R Ravindra</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Prajwal Maredukonda</li>
                                  <li>Ganesh Deshmukh</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">34</td>
                              <td className="px-4 py-2 font-medium">
                                VNR Vignana Jyothi Institute of Engineering and
                                Technology, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">Dr C D Naidu</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Nayamtulla Khan</li>
                                  <li>M Koteswara Rao</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="6">&nbsp;</td>
                            </tr>
                            <tr>
                              <td
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 font-medium"
                                colSpan="6"
                              >
                                16 Affiliated Colleges Representing 15
                                Universities in 14 States have been selected for
                                maximum geographical spread
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">35</td>
                              <td className="px-4 py-2 font-medium">
                                Andhra Loyola Institute of Engineering and
                                Technology, Vijayawada
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr O Mahesh</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Rajendra Babu Chikkala</li>
                                  <li>Koteswara Rao Addepalli</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">36</td>
                              <td className="px-4 py-2 font-medium">
                                Goa College of Engineering, Ponda, Goa
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Rajesh B Lohani</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Nilesh B Fal Dessai</li>
                                  <li>Megha Nayak</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Goa
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">37</td>
                              <td className="px-4 py-2 font-medium">
                                Sankalchand Patel College of Engineering,
                                Visnagar
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr D J Shah</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Modi Kiritkumar Jayantilal</li>
                                  <li>Patel Mehulkumar Shankarlal</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Gujarat
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">38</td>
                              <td className="px-4 py-2 font-medium">
                                Satyug Darshan Institute of Engineering and
                                Technology, Faridabad
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Sangeeta Trehan</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Shree Harsh Attri</li>
                                  <li>Parul Dhingra</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">39</td>
                              <td className="px-4 py-2 font-medium">
                                Iqbal Institute of Technology and Management,
                                Srinagar
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Mir Zaffar Hussain</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Qurat ul ain ashraf</li>
                                  <li>Ambreena Muneer</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Jammu &amp; Kashmir
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">40</td>
                              <td className="px-4 py-2 font-medium">
                                Sahyadri College of Engineering and Management,
                                Mangalore
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Rajesha S</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Duddela Sai Prashanth</li>
                                  <li>Srinath K S</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">41</td>
                              <td className="px-4 py-2 font-medium">
                                Amal Jyothi College of Engineering, Kottayam
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Z V Lakaparampil</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Fr. Dr. Rubin Thottupurathu Jose</li>
                                  <li>Juby Mathew</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Kerala
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">42</td>
                              <td className="px-4 py-2 font-medium">
                                College of Engineering, Chengannur
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Jacob Thomas V</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ahammed Siraj K K</li>
                                  <li>Vinod P R</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Kerala
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">43</td>
                              <td className="px-4 py-2 font-medium">
                                Lakshmi Narain College of Technology, Bhopal
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Vinay Kumar Sahu</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Aditya patel</li>
                                  <li>Dr. Vivek Richhariya</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Madhya Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">44</td>
                              <td className="px-4 py-2 font-medium">
                                K.C. College of Engineering and Management
                                Studies and Research, Thane
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Vilas Nitnaware</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sulochana Madchane</li>
                                  <li>Keerti D. Kharatmol</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">45</td>
                              <td className="px-4 py-2 font-medium">
                                Deogiri Institute of Engineering and Management
                                Studies, Aurangabad
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Ulhas D Shiurkar</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sugandha Nandedkar</li>
                                  <li>Manisha Ramesh Mundhe</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">46</td>
                              <td className="px-4 py-2 font-medium">
                                Manakula Vinayagar Institute of Technology,
                                Puducherry
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr S Malarkkan</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Poonguzhali N</li>
                                  <li>Dr. P Sivakumar</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Puducherry
                              </td>
                            </tr>

                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">47</td>
                              <td className="px-4 py-2 font-medium">
                                Engineering College Ajmer
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr Rekha Mehra</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Satya Narayan</li>
                                  <li>Dr. Neetu Sharma</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Rajasthan
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">48</td>
                              <td className="px-4 py-2 font-medium">
                                PSG Institute of Technology and Applied Research
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr G Chandramohan</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr R Manimegalai</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">49</td>
                              <td className="px-4 py-2 font-medium">
                                Dr. B. C. Roy Engineering College, Durgapur
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">Dr N N Pathak</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Abhijit Banerjee</li>
                                  <li>Dr Raj Kumar Samanta</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                West Bengal
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="6">&nbsp;</td>
                            </tr>
                            <tr>
                              <td
                                className="px-3 py-1 bg-yellow-100 text-yellow-700 font-medium"
                                colSpan="6"
                              >
                                1 Stand Alone Institute has been selected for
                                integration with management courses
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">50</td>
                              <td className="px-4 py-2 font-medium">
                                IIEBM, Indus Business School, Pune
                              </td>
                              <td className="px-4 py-2">
                                Standalone Institution
                              </td>
                              <td className="px-4 py-2">Dr Jai Singh</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Megha Dattaray Mane</li>
                                  <li>Dr. Amresh Nikam</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12">
                <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                  State Affiliating Universities Represented
                </h3>
                <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                  21 State Affiliating Universities are represented in the LITE
                  50 - Higher Education list for AY 2021-22. The LITE 50
                  institutions are AICTE’s Brand Ambassadors of Change who serve
                  as model institutions enabling State Universities to expand
                  the programme to more affiliated institutions from AY 2022-23
                  onwards.
                </p>
                <div>
                  <img
                    className="h-full w-full object-cover relative"
                    src="stats-map/State-Affiliating-Universities-Represented.png"
                    alt="LITE - hero background image"
                  />
                </div>
              </section>
              <section className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12">
                <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                  LITE Batch#2
                </h3>
                <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                  The institutions who have qualified for the LITE programme but
                  have not featured in the first batch would be onboarded for
                  Batch#2 of LITE.
                </p>
              </section>
              <div className="border-t border-gray-300 mt-8 py-6 lg:mt-16 lg:py-12">
                <div className="bg-primary-100 rounded-lg">
                  <div className="p-6">
                    <h3 className="text-xl lg:text-2xl text-secondary-500 font-semibold">
                      Questions?
                    </h3>
                    <p className="pt-2">
                      Email{" "}
                      <span className="font-medium"> Col. B. Venkat,</span>{" "}
                      Director, Faculty Development Cell (AICTE) at
                      <a
                        href="mailto:director.fdc@aicte-india.org?cc=wd@pupilfirst.org"
                        className={
                          "text-secondary-600 underline pl-1 tracking-wide font-medium"
                        }
                      >
                        director.fdc@aicte-india.org
                      </a>{" "}
                      <br />
                      with cc to
                      <span className="text-secondary-600 pl-1 tracking-wide font-medium">
                        wd@pupilfirst.org
                      </span>
                    </p>
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
