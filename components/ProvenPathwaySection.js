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
    heading: "Admission to Web Development 201",
    number: "2",
  },
  {
    heading: "Start Learning with peers from across the country",
    number: "3",
  },
  {
    heading: "Complete WD 201 and gets onboarded to WD 301",
    number: "4",
  },
  {
    heading: "Become a Teaching Assistant",
    number: "5",
  },
  {
    heading: "Access to internships opportunities through the Hiring Network",
    number: "6",
  },
  {
    heading: "An Opportunity to Contribute to Digital Public Goods",
    number: "7",
  },
  {
    heading:
      "Get a Minor Degree in Advanced Web Development or get credits for completing the courses as Open Electives, as applicable.",
    number: "8",
  },
  {
    heading: "Join a growing Alumni Network",
    number: "9",
  },
  {
    heading: "Contribute as an Industry Teaching Fellow",
    number: "10",
  },
];

const Step = ({ stepNumber, stepHeading, stepImgSrc, children }) => {
  return (
    <div
      id={joinWordsWithHyphen(stepHeading)}
      className="step bg-gray-900 flex gap-4 md:gap-8 flex-col sm:flex-row p-4 md:p-6"
    >
      <div className="w-32 h-32 object-contain overflow-hidden rounded">
        <img src={stepImgSrc} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-400 text-sm uppercase tracking-wide">
          Step {stepNumber}
        </p>
        <p className="font-semibold text-lg md:text-xl text-white">
          {stepHeading}
        </p>
        <div className="mt-3 text-gray-300 text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

const SectionLink = ({ heading, number }) => {
  return (
    <div>
      <a
        className="p-2 rounded-md flex gap-4 -ml-8 text-gray-400 hover:bg-gray-700 hover:text-white transition"
        href={"#" + joinWordsWithHyphen(heading)}
      >
        <span className="block font-semibold">{number}</span>
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
            link.classList.add("text-indigo-50");
            link.classList.add("font-medium");
            link.classList.add("bg-indigo-900");
          } else {
            let id = entry.target.id;
            let link = document.querySelector(`a[href="#${id}"]`);
            link.classList.remove("text-indigo-50");
            link.classList.remove("font-medium");
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
        <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
          Approved by the “All India Council for Technical Education” as{" "}
          <a
            className="font-medium underline text-indigo-500 hover:text-indigo-700"
            href="https://drive.google.com/file/d/1di0o5i8ZmI03j4bicWlKSMSeYHpeFjvA/view"
          >
            National Model Curriculum
          </a>{" "}
          for Indian Universities
        </p>
        <div className="mt-2">
          <img src="/career-pathway/career-pathway.jpg" alt="" />
        </div>
        <div className="block md:grid md:grid-cols-8 gap-4 mt-12">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-0 py-8 space-y-2">
              {sectionHeadings.map((section, index) => {
                return (
                  <SectionLink
                    key={section.number}
                    heading={section.heading}
                    number={section.number}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-5 rounded-xl overflow-hidden bg-gray-800 divide-y-2 divide-gray-700">
            <Step
              stepNumber="1"
              stepHeading="Learn Web Development 101"
              stepImgSrc="/steps-illustrations/step-1.svg"
            >
              <p>Duration: 15 hours / 1 Academic Credit</p>
              <p className="mt-2">
                Learn to write code the way professionals do and build a simple
                website.
              </p>
            </Step>
            <Step
              stepNumber="2"
              stepHeading="Admission to Web Development 201"
              stepImgSrc="/steps-illustrations/step-2.svg"
            >
              <p>
                300-hour learning journey begins towards becoming a full-stack
                developer.
              </p>
              <p className="mt-2">
                Once you complete the WD 101 course successfully adhering to
                academic standards, you shall be admitted to the Web Development
                201 course with a full scholarship.{" "}
                <span className="italic">
                  (first come, first served basis).
                </span>
              </p>
              <p className="mt-2">
                At Pupilfirst we believe in the importance of submitting
                original work and have enforced a strict review mechanism to
                detect plagiarism at any level of the course. We encourage all
                students to adhere to academic standards and submit only
                original work for review across all WD courses.
              </p>
            </Step>
            <Step
              stepNumber="3"
              stepHeading="Start Learning with peers from across the country"
              stepImgSrc="/steps-illustrations/step-3.svg"
            >
              <p>
                All eligible students, who apply, will be onboarded to the web
                development courses as part of the{" "}
                <span className="bg-yellow-300 font-medium text-gray-900">
                  Minor Degree or as Open Electives,
                </span>{" "}
                based on the Institute approval.
              </p>
              <p className="mt-2">
                You will be learning with students from 14 institutes and 8
                states across the country.
              </p>
            </Step>
            <Step
              stepNumber="4"
              stepHeading="Complete WD 201 and gets onboarded to WD 301"
              stepImgSrc="/steps-illustrations/step-4.svg"
            >
              <p>
                Upon completion of WD 201, you shall be onboarded to WD 301, an
                advanced course designed to empower you with the skills and
                knowledge needed to become a proficient full-stack web
                developer.
              </p>
            </Step>
            <Step
              stepNumber="5"
              stepHeading="Become a Teaching Assistant"
              stepImgSrc="/steps-illustrations/step-5.svg"
            >
              <p>
                Selected learners who complete WD 201 shall be onboarded as
                teaching assistants to pass on their knowledge to other students
                and will receive a stipend & certificate for their efforts.
              </p>
            </Step>
            <Step
              stepNumber="6"
              stepHeading="Access to internships opportunities through the Hiring Network"
              stepImgSrc="/steps-illustrations/step-6.svg"
            >
              <p>
                As you finish your courses, we will connect you to the companies
                in our hiring network who are looking to provide internship
                opportunities.
              </p>
            </Step>
            <Step
              stepNumber="7"
              stepHeading="An Opportunity to Contribute to Digital Public Goods"
              stepImgSrc="/steps-illustrations/step-4.svg"
            >
              <p>
                After WD 301 course, selected learners who demonstrate the
                application of skills ahead of peers shall be invited to join
                the GDC Batch of 2023 and contribute towards building Digital
                Public Goods along with the title of{" "}
                <span className="italic">
                  National Software Engineering Fellow.
                </span>
              </p>
              <p className="mt-6 font-semibold">Programme Partners:</p>
              <div className="bg-white flex space-x-8 p-4 mt-2 rounded-lg">
                <div className="w-1/2 flex items-center justify-center">
                  <img
                    className="w-24"
                    src="/programme-partners/e-gov-foun-logo.png"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <img
                    className="w-36"
                    src="/programme-partners/beckn_foundation_logo.svg"
                  />
                </div>
              </div>
              <p className="mt-4">
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
            <Step
              stepNumber="8"
              stepHeading="Get a Minor Degree in Advanced Web Development or get credits for completing the courses as Open Electives, as applicable."
              stepImgSrc="/steps-illustrations/step-8.svg"
            >
              <p>
                You can be among the pioneers who graduate from University with
                a{" "}
                <span className="bg-yellow-300 font-medium text-gray-900">
                  B.Tech/BE in X with a Minor Degree in Advanced Web
                  Development;
                </span>{" "}
                where X = your current branch of study. If you have opted for
                Open Electives, this will contribute towards your graduating
                degree.
              </p>
            </Step>

            <Step
              stepNumber="9"
              stepHeading="Join a growing Alumni Network"
              stepImgSrc="/steps-illustrations/step-9.svg"
            >
              <p>
                You will be inducted into our Alumni network once you complete
                WD 201 successfully.
              </p>
            </Step>
            <Step
              stepNumber="10"
              stepHeading="Contribute as an Industry Teaching Fellow"
              stepImgSrc="/steps-illustrations/step-9.svg"
            >
              <p>
                Vamsi Krishna was one of our Teaching Fellow who graduated from
                this programme during July-December 2019 and started working as
                a Software Engineer. In WD06Y22 cohort, with the knowledge he
                gained from industry, he contributed towards upgrading the
                curriculum for new learners and helped them in their learning
                journey. Vamsi is now pursuing MS in Computer Science and
                Engineering from the University of Buffalo, New York.
              </p>
            </Step>
          </div>
        </div>
        <div className="p-4 md:p-10 grid md:grid-cols-2 gap-6 bg-gray-700 rounded-lg mt-12">
          <div className="col-span-1">
            <h3 className="text-primary-500 text-4xl">Interested?</h3>
            <p className="text-white ">
              Admissions open for LITE Advanced Web Development program on a
              scholarship basis.
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <a
              id="apply-button-proven-pathway"
              href="https://apply.pupilfirst.org/apply/forms/6"
              target="_blank"
              className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
            >
              Apply now for learning JavaScript (WD 101)
            </a>
          </div>
        </div>
      </SectionWithHeading>
    </div>
  );
}
