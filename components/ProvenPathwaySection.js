import { useEffect } from "react";
import SectionWithHeading from "./SectionWithHeading";

let joinWordsWithHyphen = (string) => {
  return string.split(" ").join("-");
};

let headings = [
  "Learn Web Development 101",
  "Apply for Admission to Minor Degree",
  "Start Learning with peers from across the country",
  "Become a Teaching Assistant",
  "Gain Internships through the Hiring Network",
  "An Opportunity to Contribute to Digital Public Goods",
  "Become a Teaching Assistant -",
  "Join a growing Alumni Network",
  "Contribute as an Industry Teaching Fellow",
];

const Step = ({ stepNumber, stepHeading, stepImgSrc, children }) => {
  return (
    <div
      id={joinWordsWithHyphen(stepHeading)}
      className="step bg-gray-900 flex gap-4 md:gap-8 flex-col sm:flex-row border-t border-gray-800 p-4 md:p-6"
    >
      <div className="w-32 h-32 object-contain overflow-hidden bg-gray-700 rounded">
        {/* <img src="/people/avishek_photo.jpeg" /> */}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-400">Step {stepNumber}</p>
        <p className="font-semibold text-lg text-white">{stepHeading}</p>
        <div className="mt-4 text-gray-200 text-sm">{children}</div>
      </div>
    </div>
  );
};

const SectionLink = ({ heading }) => {
  return (
    <div>
      <p>
        <a
          className="p-2 rounded-md block text-gray-400 hover:bg-gray-700 hover:text-white"
          href={"#" + joinWordsWithHyphen(heading)}
        >
          {heading}
        </a>
      </p>
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
        <div className="block md:grid md:grid-cols-8 gap-4 mt-12">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-0 py-8 space-y-2">
              {headings.map((heading, index) => {
                return <SectionLink key={index} heading={heading} />;
              })}
            </div>
          </div>
          <div className="col-span-5 rounded-xl overflow-hidden">
            <Step stepNumber="1" stepHeading="Learn Web Development 101">
              <p>Duration: 15 hours / 1 Academic Credit</p>
              <p className="mt-2">
                Learn to write code the way professionals do and build a simple
                website.
              </p>
            </Step>
            <Step
              stepNumber="2"
              stepHeading="Apply for Admission to Minor Degree"
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
            <Step stepNumber="4" stepHeading="Become a Teaching Assistant">
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
            <Step
              stepNumber="5"
              stepHeading="Gain Internships through the Hiring Network"
            >
              <p>
                An increasing list of companies are participating to onboard
                full stack developer interns as you finish your courses.
              </p>
            </Step>
            <Step
              stepNumber="6"
              stepHeading="An Opportunity to Contribute to Digital Public Goods"
            >
              <p>
                Selected learners who demonstrate the application of skills
                ahead of peers shall be invited to join the GDC Batch of 2022
                and contribute towards building Digital Public Goods along with
                the title of National Software Engineering Fellow.
              </p>
              <p className="mt-2">
                <a className="text-indigo-400 font-semibold" href="">
                  {" "}
                  Learn More about GDC Internships
                </a>
              </p>
            </Step>
            <Step stepNumber="7" stepHeading="Become a Teaching Assistant -">
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
                  {/* <img src="/people/avishek_photo.jpeg" /> */}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-400">Step 8</p>
                  <p className="font-semibold text-lg text-white">
                    Join a growing Alumni Network
                  </p>
                  <div className="mt-4 text-gray-200 text-sm">
                    <p>Graduating WD students can join over X alumni</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <img
                  className="w-full"
                  src="/company-logos-on-white.png"
                  alt="Alumni network Company Logos"
                />
              </div>
            </div>
            <Step
              stepNumber="9"
              stepHeading="Contribute as an Industry Teaching Fellow"
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
            <h3 className="text-primary-500 text-4xl">
            Interested?
            </h3>
            <p className="text-white ">
            Admissions open for 10,000 Minor Degree Scholarships in Web Development.
            </p>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQj8aeoRfOHYlOALcUt4mWmFefHAeGtKd5eu6SQDHOaDfckGkBDFz8JrtEiLZmGX-KyFyaDMLdCDkTL/pub"
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
