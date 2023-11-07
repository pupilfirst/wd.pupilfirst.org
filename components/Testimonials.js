import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
  {
    name: "Arepelly Shylesh",
    batch: "WD06Y22 Cohort",
    university: "Vardhaman College of Engineering, Shamshabad, Telangana",
    testimony:
      "Feedback on Capstone Project in course: Before starting this course, I built websites using HTML for frontend which were not very attractive for the user , but after learning this course, now I am confident that I can build the frontend interface more beautifully and more attractive for the users. This capstone project helped me to build my skills and understand deeply about the core concepts of React, Redux. I faced challenges mainly on Redux operations, so I searched the forums, YouTube and asked on Pupilfirst Discord learning community to understand clearly.",
    imageSrc: "/people/LITE-avatar.svg",
  },
  {
    name: "Frehiwot Abebie Haile",
    batch: "WD06Y22 Cohort",
    university: "Marwadi University",
    testimony:
      "Having the opportunity to learn from Pupilfirst professionals has been extremely beneficial to me. I didn't have a well-structured knowledge of NodeJs as I'm a self-taught programmer. However, the courses taught me the fundamentals of code structure and accepted project methods. The capstone project's challenges have improved my problem-solving abilities. This has piqued my interest in learning and exploring more. Furthermore, I'll be honored to serve as a TA. In the process, I'll improve my skills by assisting others. I'm excited to work with the Pupilfirst team!",
    imageSrc: "/people/Frehiwot-Abebie-Haile.jpg",
  },
  {
    name: "Sai Mallik Rameshwaram",
    batch: "WD06Y22 Cohort",
    university: "Vardhaman College of Engineering",
    testimony:
      "Feedback on Course Management by Pupilfirst Team: The way the Pupilfirst team managed the course was impressive. The content was well-organized, and the guidance offered was really helpful in my learning journey. The platform itself was easy to navigate, which made the whole experience much smoother. Overall, I'm quite satisfied with how the course was handled, and I want to acknowledge the team's efforts",
    imageSrc: "/people/Sai-Mallik.png",
  },
  {
    name: "Javid Sumra",
    batch: "WD06Y22 Cohort",
    university: "Feedback on Pupilfirst LMS",
    testimony:
      "The Pupilfirst LMS is an impressive learning platform. I particularly appreciate the auto-grading feature powered by VTA, as well as the user-friendly interface (UI).",
    imageSrc: "/people/LITE-avatar.svg",
  },
  {
    name: "Ankit Rawat",
    batch: "WD06Y22 Cohort",
    university: "TulTula's Institute, Dehradun, Uttarakhand",
    testimony:
      "The course content is crisp and precise which makes it easy to follow along. Adding more video content to the course will definitely help students like me understand the topics easily. Also, I feel like the Typescript content is very few in the course, adding more resources for Typescript will surely help.",
    imageSrc: "/people/LITE-avatar.svg",
  },
  {
    name: "Aryan Patel",
    batch: "WD04Y22",
    university: "Veer Surendra Sai University Of Technology",
    testimony:
      "I applied for the first batch of the GDC Fellowship program but got rejected. I applied for the second batch, and luckily I got selected. We got dedicated 3 months of training in React JS, Typescript and Django by PupilFirst. Before doing the course, I had very little knowledge of Full Stack Development, but after going through the course, I was quite confident in building web apps. After doing the courses, I got an opportunity to contribute to a digital public good named CARE. Getting exposure to contribute to an industrial and scalable project boosted my skills. The curriculum is designed in such a way that in a short period of time a person with less knowledge can become a pro in building web apps. The skills I acquired and the projects I built helped me a lot during my placements. GDC Fellowship was the best thing which happened to me in my life till date.",
    imageSrc: "/people/Aryan-Patel.png",
  },
];

export default function Testimonials() {
  return (
    <div>
      <SectionWithHeading heading="Testimonials" darkBackground={true}>
        <div className="flex flex-col gap-6 items-end mt-12">
          {testimonialList.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              batch={testimonial.batch}
              university={testimonial.university}
              testimony={testimonial.testimony}
              imageSrc={testimonial.imageSrc}
            />
          ))}
          <a
            className="flex md:w-5/6 justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 hover:bg-gray-900 hover:text-indigo-300 transition"
            href="/testimonials"
          >
            <span>See more testimonials</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </span>
          </a>
        </div>
      </SectionWithHeading>
    </div>
  );
}
