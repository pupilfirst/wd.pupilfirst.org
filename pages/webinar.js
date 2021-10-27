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
        <section className="border-t border-gray-200 ">
          <div className="container mx-auto mt-6 md:mt-8 max-w-3xl px-3 lg:px-0">
            <div className="py-10">
              <iframe
                className="w-full"
                height="344"
                src="https://www.youtube.com/embed/JPDeql2lth0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
