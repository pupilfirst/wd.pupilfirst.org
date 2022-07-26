/** @format */

import Head from "next/head";
import React, { useState } from "react";
import hiringNetworkData from "./../data/hiring-network.json";

function ImageWithDescription({ name, githuburl, caption, role, imgSrc }) {
	return (
		<div className="md:px-4">
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
			<main className="bg-gradient-to-br from-gray-800 to-gray-900 mx-auto">
				<section className="hero__bg-pattern bg-gray-900 relative">
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
					<div className="relative pb-8 md:pb-16 px-4 xl:px-0">
						<div className="max-w-6xl 2xl:max-w-7xl mx-auto">
							<div className="z-10 flex flex-col items-center">
								<p className=" rounded bg-gray-800 py-1 px-1 md:px-2 mt-4 font-medium text-sm text-gray-400 max-w-max">
									All India Council for Technical Education.
								</p>
								<h1 className="text-primary-500 text-center text-3xl md:text-3xl lg:text-5xl xl:text-6xl py-2 font-extrabold lg:leading-tight xl:leading-tight">
									Minor Degree in <br />
									Advanced Web Development
									<span className="text-indigo-500">.</span>
								</h1>
								<p className="text-center max-w-3xl font-mono mx-auto pr-4 pt-4 text-base text-white">
									The Minor Degree in Advanced Web Development Curriculum is
									approved by All India Council for Technical Education (AICTE)
									under the National Educational Alliance for Technology (NEAT)
									programme of the Ministry of Education, Government of India.
									This can be opted for and pursued by students who are enrolled
									in the Institutes selected as part of the Batch 1 of LITE
									programme.
								</p>
								<div className="pt-4 md:pt-8">
									<div>
										<a
											href="https://docs.google.com/document/d/e/2PACX-1vQj8aeoRfOHYlOALcUt4mWmFefHAeGtKd5eu6SQDHOaDfckGkBDFz8JrtEiLZmGX-KyFyaDMLdCDkTL/pub"
											target="_blank"
											className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="w-6 h-6"
												viewBox="0 0 16 16"
											>
												<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z" />
											</svg>
											<span>See list of institutions</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 -z-30">
							<img
								className="h-full w-full object-cover relative"
								src="hero/hero-bg.webp"
								alt="LITE - hero background image"
							/>
							<div className="absolute inset-0"></div>
						</div>
					</div>
					<div className="px-4 lg:px-0 max-w-6xl 2xl:max-w-7xl mx-auto">
						<div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
							<iframe
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
					</div>
				</section>
				<section className="px-4 xl:mx-0 py-10 md:py-16 bg-gray-900">
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 relative shadow-lg max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between text-white">
							<div className="md:w-8/12 p-4 lg:p-10">
								<h2 className="text-xl md:text-3xl text-primary-500">
									Co-created by Freshworks
								</h2>

								<p className="mt-4 font-mono text-sm md:text-base lg:text-lg">
									Pupilfirst along with Freshworks (
									<a
										className="font-semibold text-indigo-400 underline hover:bg-indigo-900 hover:bg-opacity-50 transition"
										href="https://www.freshworks.com/day-zero-for-freshworks-blog/"
										target="_blank"
									>
										NASDAQ:FRSH
									</a>
									), India's leader in Software as a Service (SaaS) industry,
									designed the curriculum for a minor degree in web development.
								</p>
								<p className="mt-4 font-mono text-sm md:text-base lg:text-lg">
									This course was initially created based on Freshworks’
									internal training program for their new employees, and is
									continuously updated to meet student’s requirements and
									changing industry demands. The intent of this course is to
									create a pathway for students from all engineering disciplines
									to the global web development industry.
								</p>
								<p className="mt-4 text-sm md:text-base">
									Learn More at:{" "}
									<a
										className="text-indigo-400 font-semibold hover:underline hover:bg-indigo-900"
										target="_blank"
										href="https://pupilfirst.org/"
									>
										https://pupilfirst.org/
									</a>
								</p>
							</div>

							<div className="md:w-4/12 flex flex-col items-center justify-between flex-shrink-0 border-l border-gray-700 rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
								<div className="w-full lg:h-1/2 flex items-center justify-center flex-shrink-0 rounded-t-3xl md:rounded-tl-none bg-gradient-to-br from-gray-50 to-gray-200">
									<div className="p-6 md:p-3">
										<img
											className="w-44 h-24 md:w-64 lg:w-72 object-contain"
											src="logos/freshworks-logo.svg"
											alt="Freshworks logo"
										/>
									</div>
								</div>
								<div className="w-full lg:h-1/2 flex items-center justify-center flex-shrink-0 rounded-b-3xl md:rounded-bl-none bg-gradient-to-br from-purple-700 to-purple-900">
									<div className="p-6 md:p-3">
										<img
											className="w-36 h-24 md:w-48 lg:w-60 object-contain"
											src="logos/pupilfirst-logo-white.svg"
											alt="Pupilfirst logo"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-white px-4 py-16 h-full">
					<div className="max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="max-w-3xl mx-auto text-center pb-4">
							<h2 className="text-2xl lg:text-6xl text-gray-600 leading-snug">
								Hiring Network
							</h2>
						</div>
						<div className="mt-2 lg:mt-4 grid grid-cols-2 gap-1 md:grid-cols-5">
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
				</section>

				<section className="relative bg-gray-900 border-t border-gray-700">
					<div className="max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="border-l border-gray-700 mx-4 xl:mx-0">
							<div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-8">
								<div className="lg:col-span-7 2xl:col-span-8">
									<div className="pt-10 lg:pt-20">
										<div className="heading-with-leftborder">
											<h2 className="max-w-5xl font-bold text-2xl lg:text-6xl text-primary-500 leading-snug lg:ml-8 xl:ml-11 2xl:ml-32 pl-4">
												Everything you
												<br /> need to know
											</h2>
										</div>
									</div>
									<div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 text-white ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												What is this program?
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												Industry led Minor degree programme in Advanced Web
												Development that would enable you to become a skilled
												web developer in the global Software as a Service (SaaS)
												Industry.
											</p>
										</div>
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Why?
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												To learn the professional web development knowledge and
												practical skills used every day in the industry.
											</p>
										</div>
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Who is this for?
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												This programme is available for students from Institutes
												whose faculty coordinator has completed the faculty
												training requirements. These Institutes are amongst the
												first batch of{" "}
												<a
													className="font-semibold text-indigo-400 underline hover:bg-indigo-900 hover:bg-opacity-50 transition"
													href="https://lite.pupilfirst.org/ay-2021-22"
													target="_blank"
												>
													50 selected institutions
												</a>{" "}
												who have qualified for AICTE’s Leadership in Teaching
												Excellence (LITE) program.
											</p>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												Within these institutions, students can apply based on
												the Minor Degree format implemented in their respective
												Institute. Check with your LITE faculty coordinator for
												more information.
											</p>
										</div>
										{/*
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
                        When?
                      </h3>
                      <p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
                        The first batch of students is tentatively planned from March-July 2022. Contact
                        the faculty coordinator from your Institute for further
                        details.
                      </p>
                    </div>
                    */}
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Credits?
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												The minor degree in advanced web development has 4
												courses adding upto 20 credits.
											</p>
										</div>
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Format
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												Self-paced learning with personalised feedback from
												industry coaches, LITE Faculty co-ordinators and
												teaching assistants.
											</p>
										</div>
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Assignments &amp; assessments
											</h3>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												You'll work on lots of assignments in our courses, and
												it's possible to get a perfect score on each and every
												assignment. However, it's unlikely that you'll get a
												perfect score on your first try. We expect you to try to
												improve because that's how professionals work.{" "}
											</p>
											<p className="ml-8 font-mono tracking-tight mt-2 pt-1 lg:text-lg ">
												In a professional project, you rarely (if ever) get
												things right on the first try. Instead, you're expected
												to listen to user feedback, do some research of your
												own, and then iterate on your work. Our courses are
												designed by industry professionals to mimic this. You'll
												learn just enough to complete assignments, and we know
												from experience what kind of mistakes you'll make. So
												every time you submit, you'll get feedback prepared by
												pros to nudge your work closer to perfection.
											</p>
										</div>
										<div>
											<h3 className="heading-with-underscore text-xl lg:text-2xl text-indigo-400 font-semibold">
												Degree Certificate
											</h3>
											<p className="ml-8 font-mono tracking-tight pt-1 lg:text-lg ">
												Yes. Upon successful completion of the programme, you
												shall receive a Minor Degree in Advanced Web Development
												from your university along with the Major Degree you are
												pursuing (eg: B.Tech/BE in Electronics with Minor in
												Advanced Web Development). In addition you will also
												receive course completion certificates from Pupilfirst
												on completing respective courses in the minor track.
											</p>
										</div>
									</div>
								</div>
								<div className="hidden lg:block lg:col-span-5 2xl:col-span-4">
									<div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
										<div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-r md:rounded-lg border border-gray-700 relative shadow-lg">
											<div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-4 border-b border-gray-700">
												<div className="w-3 h-3 bg-gray-700 rounded-full"></div>
												<div className="w-3 h-3 bg-gray-700 rounded-full"></div>
												<div className="w-3 h-3 bg-gray-700 rounded-full"></div>
											</div>
											<div className="p-2 md:p-4 lg:p-8">
												<h3 className="text-2xl lg:text-3xl font-semibold leading-tight text-primary-500">
													How to apply?
												</h3>

												<p className="text-base md:text-lg font-mono tracking-tight mt-3 space-y-3">
													All students who wish to apply for the Minor Degree in
													Advanced Web Development may contact LITE Faculty
													Coordinator at their institution for details.
												</p>
												<div className="pt-4">
													<a
														href="https://docs.google.com/document/d/e/2PACX-1vSVFaCSJp9_NuHFBlMfQJxwa_S8Da1cxVbaQFfxOQ01PvoX8JVa86iAMn6p3ukGo4cGRNWFrFUdDoc1/pub"
														target="_blank"
														className="inline-flex items-center space-x-4 w-full py-3 text-indigo-400 rounded-md text-lg font-semibold hover:underline hover:shadow-xl transition "
													>
														<span>
															See list of institutions and Faculty Coordinators
														</span>
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
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-gray-800 border-t border-b border-gray-700 mx-auto relative">
					<div className="max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="border-l border-gray-700 mx-4 xl:mx-0">
							<div className="pt-10 lg:pt-20">
								<div className="heading-with-leftborder">
									<h2 className="max-w-5xl font-bold text-2xl lg:text-6xl text-primary-500 leading-tight ml-4 lg:mx-auto">
										Price
									</h2>
								</div>
							</div>

							<div className="flex flex-col mt-4 pb-10 lg:pb-20 ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
								<div className="max-w-4xl font-mono text-white tracking-tight pt-1 lg:text-lg ">
									<p>
										The AICTE (NEAT) approved course fees are mentioned below.
										This amount is exclusive of the government taxes as
										applicable.
									</p>
								</div>

								<div className="sm:rounded-lg mt-8">
									<table className="table-auto w-full overflow-hidden border border-gray-800 shadow-lg">
										<thead className="bg-gradient-to-r from-primary-500 to-primary-600 text-gray-900 font-semibold">
											<tr className="border border-gray-500 text-xs">
												<th
													scope="col"
													className="p-2 md:px-6 md:py-3 text-left uppercase tracking-wider"
												>
													S. No
												</th>
												<th
													scope="col"
													className="p-2 md:px-6 md:py-3 text-left uppercase tracking-wider"
												>
													Course Name
												</th>
												<th
													scope="col"
													className="p-2 md:px-6 md:py-3 text-left uppercase tracking-wider"
												>
													<span className="hidden lg:block">
														AICTE approved course fee per student (in Rs.).
													</span>
													<span className="block lg:hidden">
														course fee per student (in Rs.)
													</span>
												</th>
											</tr>
										</thead>
										<tbody className="bg-gradient-to-r w-full from-gray-800 to-gray-900 text-gray-50">
											<tr className="font-mono bg-gray-700 bg-opacity-50 text-sm md:text-lg border border-gray-500">
												<td className="p-2 md:p-6 lg:whitespace-nowrap font-medium ">
													1
												</td>
												<td className="p-2 md:p-6 lg:whitespace-nowrap border-r border-gray-500">
													Web Development 101 (Getting Started with JavaScript)
												</td>
												<td
													className="p-2 md:p-6 lg:whitespace-nowrap border-r border-gray-500"
													rowSpan="2"
												>
													10,000
												</td>
											</tr>

											<tr className="font-mono bg-gray-700 bg-opacity-50 text-sm md:text-lg border border-gray-500">
												<td className="p-2 md:p-6 lg:whitespace-nowrap font-medium ">
													2
												</td>
												<td className="p-2 md:p-6 lg:whitespace-nowrap border-r border-gray-500">
													Web Development 201 (Server-side programming with Ruby
													on Rails)
												</td>
											</tr>

											<tr className="font-mono text-sm md:text-lg">
												<td className="p-2 md:p-6 lg:whitespace-nowrap font-medium">
													3
												</td>
												<td className="p-2 md:p-6 lg:whitespace-nowrap">
													Web Development 301 (Front-end development with React
													& TypeScript)
												</td>
												<td className="p-2 md:p-6 lg:whitespace-nowrap">
													10,000
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-gray-800 border-t border-b border-gray-700 mx-auto relative">
					<div className="max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="border-l border-gray-700 mx-4 xl:mx-0">
							<div className="pt-10 lg:pt-20">
								<div className="heading-with-leftborder">
									<h2 className="max-w-5xl font-bold text-2xl lg:text-6xl text-primary-500 leading-tight ml-4 lg:mx-auto">
										Course Authors and Coaches
									</h2>
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
							<div className="max-w-5xl mx-auto relative z-10 pl-4 lg:pl-0">
								<div className="md:divide-x divide-gray-700 space-y-12 gap-y-12 md:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 py-12 lg:pb-16">
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
											<p className="font-mono tracking-tight leading-snug text-white mt-3">
												Hari is a full-stack software engineer with 12 years of
												experience and leads the development of Pupilfirst LMS,
												one of the largest open-source projects that uses the
												ReScript programming language.
											</p>
										}
										imgSrc="people/hari-gopal.png"
									/>
									{/*
                  <ImageWithDescription
                    name="Prashanth Reddy Koteru"
                    githuburl={
                      <a
                        className="inline-flex text-gray-300 hover:text-indigo-400 transition"
                        href="https://github.com/prashanth726"
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
                    caption={<p>Coach-Web Development, Pupilfirst</p>}
                    role={
                      <p className="font-mono tracking-tight leading-snug text-white mt-3">
                        Prashanth is a full-stack web developer and product
                        engineer with five years of experience and an active
                        evangelist in the indian developer community.
                      </p>
                    }
                    imgSrc="people/prashanth-reddy.png"
                  />
                  <ImageWithDescription
                    name="Mahesh Krishna Kumar"
                    githuburl={
                      <a
                        className="inline-flex text-gray-300 hover:text-indigo-400 transition"
                        href="https://github.com/mahesh-krishnakumar"
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
                    caption={<p>Full-stack developer, Pupilfirst</p>}
                    role={
                      <p className="font-mono tracking-tight leading-snug text-white mt-3">
                        Mahesh is currently a full-stack developer at Pupilfirst
                        with close to five years experience in product building
                        using Ruby on Rails, Javascript and ReScript.
                      </p>
                    }
                    imgSrc="people/mahesh.jpg"
                  />
                  <ImageWithDescription
                    name="Bodhish Thomas"
                    githuburl={
                      <a
                        className="inline-flex text-gray-300 hover:text-indigo-400 transition"
                        href="https://github.com/bodhish"
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
                    caption={<>Full-stack developer, Pupilfirst</>}
                    role={
                      <p className="font-mono tracking-tight leading-snug text-white mt-3">
                        Bodhish is a full-stack developer with about four years
                        of experience in product development at Pupilfirst. He's
                        very active in the developer community.
                      </p>
                    }
                    imgSrc="people/bodhish.jpg"
                  />
                  <ImageWithDescription
                    name="Bellam Vamsi Krishna"
                    githuburl={
                      <a
                        className="inline-flex text-gray-300 hover:text-indigo-400 transition"
                        href="https://github.com/vamsikri-hash"
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
                    caption={<>Assistant Coach - Web Development, Pupilfirst</>}
                    role={
                      <p className="font-mono tracking-tight leading-snug text-white mt-3">
                        Vamsi has been a Teaching Assistant for Web Development
                        courses offered by Pupilfirst for over two years after
                        completing the courses successfully as a student. He is
                        currently working at Hottinger Brüel & Kjær (HBK) as an
                        Engineering Trainee. His interest mostly lies in the
                        area of full stack web development. He likes to learn
                        and explore more parts of web development.
                      </p>
                    }
                    imgSrc="people/vamsi_bellam-1.jpeg"
                  />
                  */}
									<ImageWithDescription
										name="Vignesh Rajendran"
										caption={<p> Principal Engineer, Oracle</p>}
										role={
											<p className="font-mono tracking-tight leading-snug text-white mt-3">
												Vignesh is a seasoned UI Technology Evangelist with
												around 10 years of experience building and developing
												amazing User Experiences across various platforms and
												domains. He works with Oracle as a Principal Engineer
												solving UI engineering use cases for their Cloud and
												Cloud-native products. The stack he works on covers
												everything UI, although now he mainly codes on
												Javascript and Typescript. In leisure, he writes a lot
												and read a lot more.
											</p>
										}
										imgSrc="people/Vignesh_Profile.jpg"
									/>

									<ImageWithDescription
										name="Melson J Zacharias"
										caption={<p> CTO, Perleybrook Labs LLC.</p>}
										role={
											<p className="font-mono tracking-tight leading-snug text-white mt-3">
												Melson is CTO at Perleybrook Labs LLC, where he
												primarily works with C++, Python, and Typescript. In his
												spare time, he would be reading a book or can be seen
												answering questions in StackOverflow.
											</p>
										}
										imgSrc="people/melson.jpeg"
									/>
									<ImageWithDescription
										name="Avishek Jana"
										caption={
											<p>
												{" "}
												Co-Founder & Principal Engineer, GEOGO Techsolutions
												Pvt. Ltd.
											</p>
										}
										role={
											<p className="font-mono tracking-tight leading-snug text-white mt-3">
												Avishek is an Engineer, a full-stack developer and an
												open-source contributor. Currently, he is working at
												GEOGO Techsolutions as Principal Engineer. He started
												his professional career in 2013 and worked on
												technologies like: Ruby on Rails, NodeJS, ReactJS,
												TypeScript etc. Apart from work, he loves to mentor and
												train fresh graduates to enhance their skills as per
												industry demands. Teaching is his way to contribute back
												to the society.
											</p>
										}
										imgSrc="people/avishek_photo.jpeg"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
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
										Here’s what some of our students had to say
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
				</section>
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
