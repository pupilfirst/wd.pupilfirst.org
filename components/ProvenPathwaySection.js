import { useEffect } from "react";
import SectionWithHeading from "./SectionWithHeading";

let joinWordsWithHyphen = (string) => {
  return string.split(" ").join("-");
};

let sectionHeadings = [
  {
    heading: "Learn Web Development 101",
    number: "1",
  },
  {
    heading: "Apply for Admission to Minor Degree",
    number: "2",
  },
  {
    heading: "Start Learning with peers from across the country",
    number: "3",
  },
  {
    heading: "Become a Teaching Assistant",
    number: "4",
  },
  {
    heading: "Gain Internships through the Hiring Network",
    number: "5",
  },
  {
    heading: "An Opportunity to Contribute to Digital Public Goods",
    number: "6",
  },
  {
    heading:   "Become a Teaching Assistant -",
    number: "7",
  },
  {
    heading: "Join a growing Alumni Network",
    number: "8",
  },
  {
    heading: "Contribute as an Industry Teaching Fellow",
    number: "9",
  }, 
];

const Step = ({ stepNumber, stepHeading, stepImgSrc, children }) => {
  return (
    <div
      id={joinWordsWithHyphen(stepHeading)}
      className="step bg-gray-900 flex gap-4 md:gap-8 flex-col sm:flex-row border-t border-gray-800 p-4 md:p-6"
    >
      <div className="w-32 h-32 object-contain overflow-hidden rounded">
        <img src={stepImgSrc} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-400">Step {stepNumber}</p>
        <p className="font-semibold text-lg text-white">{stepHeading}</p>
        <div className="mt-4 text-gray-200 text-sm">{children}</div>
      </div>
    </div>
  );
};

const SectionLink = ({ heading, number }) => {
  return (
    <div>
      <a
        className="p-2 rounded-md flex gap-4 -ml-8 text-gray-400 hover:bg-gray-700 hover:text-white"
        href={"#" + joinWordsWithHyphen(heading)}
      >
        <span className="block font-bold text-gray-600">{number}</span>
        <span className="block ">{heading}</span>
      </a>
    </div>
  );
};

export default function ProvenPathwaySection() {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;
            let link = document.querySelector(`a[href="#${id}"]`);
            link.classList.add("text-indigo-200");
            link.classList.add("bg-indigo-900");
          } else {
            let id = entry.target.id;
            let link = document.querySelector(`a[href="#${id}"]`);
            link.classList.remove("text-indigo-200");
            link.classList.remove("bg-indigo-900");
          }
        });
      },
      {
        rootMargin: "-8px 0px -98% 0px",
      }
    );
    let targets = document.querySelectorAll(".step");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <div>
      <SectionWithHeading heading="Join a proven career pathway">
        <p className="text-white mt-4 w-4/5">
          Approved by the “All India Council for Technical Education” as
          National Model Curriculum for Indian Universities
        </p>
        <div className="mt-12">
          <img src="/career-pathway/career-pathway.png" alt="" />
        </div>
        <div className="block md:grid md:grid-cols-8 gap-4 mt-12">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-0 py-8 space-y-2">
              {sectionHeadings.map((section, index) => {
                return <SectionLink key={section.number} heading={section.heading} number={section.number} />;
              })}
            </div>
          </div>
          <div className="col-span-5 rounded-xl overflow-hidden">
            <Step stepNumber="1" stepHeading="Learn Web Development 101" stepImgSrc="/steps-illustrations/step-1.svg">
              <p>Duration: 15 hours / 1 Academic Credit</p>
              <p className="mt-2">
                Learn to write code the way professionals do and build a simple
                website.
              </p>
            </Step>
            <Step
              stepNumber="2"
              stepHeading="Apply for Admission to Minor Degree"
              stepImgSrc="/steps-illustrations/step-2.svg"
            >
              <p>Duration: 300 hours/ 19 Academic Credits</p>
              <p className="mt-2">
                Register your interest by filling in a form your faculty shall
                share.
              </p>
            </Step>
            <Step
              stepNumber="3"
              stepHeading="Start Learning with peers from across the country"
              stepImgSrc="/steps-illustrations/step-3.svg"
            >
              <p>
                From all applicants, 300 students who demonstrate learning speed
                and impressive submissions in WD 101 shall get an Admission
                Letter to join the Minor Degree Programme as the first batch.
              </p>
              <p className="mt-2">
                All other students shall be on a waitlist and get admission
                letters as soon as the first batch of students become Teaching
                Assistants.
              </p>
            </Step>
            <Step stepNumber="4" stepHeading="Become a Teaching Assistant" stepImgSrc="/steps-illustrations/step-4.svg">
              <p>
                From all applicants, 300 students who demonstrate learning speed
                and impressive submissions in WD 101 shall get an Admission
                Letter to join the Minor Degree Programme as the first batch.
              </p>
              <p className="mt-2 italic">
                Web Development 301 is being upgraded and shall be available
                from Jan 2023 onwards.
              </p>
            </Step>
            <Step
              stepNumber="5"
              stepHeading="Gain Internships through the Hiring Network"
              stepImgSrc="/steps-illustrations/step-5.svg"
            >
              <p>
                An increasing list of companies are participating to onboard
                full stack developer interns as you finish your courses.
              </p>
            </Step>
            <Step
              stepNumber="6"
              stepHeading="An Opportunity to Contribute to Digital Public Goods"
              stepImgSrc="/steps-illustrations/step-6.svg"
            >
              <p>
                Selected learners who demonstrate the application of skills
                ahead of peers shall be invited to join the GDC Batch of 2022
                and contribute towards building Digital Public Goods along with
                the title of National Software Engineering Fellow.
              </p>
              <p className="mt-2">
                <a
                  className="text-indigo-400 font-semibold"
                  target="_blank"
                  href="https://fullstack.gdc.network/"
                >
                  {" "}
                  Learn More about GDC Internships
                </a>
              </p>
            </Step>
            <Step stepNumber="7" stepHeading="Become a Teaching Assistant -" stepImgSrc="/steps-illustrations/step-4.svg">
              <p>
                Be among the pioneers who graduate from University with a
                B.Tech/BE in X with a Minor Degree in Advanced Web Development;
                where X = your current branch of study.
              </p>
            </Step>
            <div
              className="step border-t border-gray-800 p-4 md:p-6 bg-gray-900"
              id={joinWordsWithHyphen("Join a growing Alumni Network")}
            >
              <div className="flex gap-8 flex-col sm:flex-row">
                <div className="w-32 h-32 object-contain overflow-hidden ">
                  <img src="/steps-illustrations/step-8.svg" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-400">Step 8</p>
                  <p className="font-semibold text-lg text-white">
                    Join a growing Alumni Network
                  </p>
                  <div className="mt-4 text-gray-200 text-sm">
                    <p>
                      Graduating WD students can join over 770 alumni working in
                      companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Step
              stepNumber="9"
              stepHeading="Contribute as an Industry Teaching Fellow"
              stepImgSrc="/steps-illustrations/step-9.svg"
            >
              <p>
                Vamsi Krishna is a Teaching Fellow who graduated in this
                programme during July-December 2019 and is now working at
                Hottinger Brüel &amp; Kjær (HBK) as a Software Engineer. He
                shares the knowledge gained from the industry by upgrading the
                curriculum for new learners.
              </p>
            </Step>
          </div>
        </div>
        <div className="p-10 flex gap-6 flex-wrap items-center justify-between bg-gray-700 rounded-lg mt-12">
          <div>
            <h3 className="text-primary-500 text-4xl">Interested?</h3>
            <p className="text-white ">
              Admissions open for 10,000 Minor Degree Scholarships in Web
              Development.
            </p>
          </div>
          <div>
            <a
              href="https://www.pupilfirst.school/courses/1802"
              target="_blank"
              className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
            >
              Apply now
            </a>
          </div>
        </div>
      </SectionWithHeading>
    </div>
  );
}
