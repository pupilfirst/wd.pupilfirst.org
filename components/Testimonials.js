import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
  {
    name: "Shailesh Aanand",
    batch: "(CEF Batch #1)",
    testimony:
      "I came to know about the fellowship opportunity from my professors. The course seemed promising as I had some knowledge about Frontend Development, but this seemed like a good chance to dive deeper. Apart from the interesting and well-paced course, what's really inspiring is the constant help and support from the mentors round the clock. After the course, I felt much more confident as a Full Stack Web Developer. The course was followed by a 6 month internship. I had the chance to work on industry-level projects and contributed to various Covid-19 related projects that helped the government of Kerala and 4 other states to combat the ongoing pandemic. Thus, apart from the fact that it helped me gain experience, it filled me with immense satisfaction for helping out others in times of need. It was an inspiring and encouraging push for my career and I feel grateful for it.",
    imageSrc: "/people/Shailesh-Aanand_profile.jpeg",
  },
  {
    name: "Swapnil Jagtap",
    batch: "(CEF Batch #1)",
    testimony:
      "I began my software engineer journey during the covid pandemic. I discovered an interest in Web improvement. I learned concepts of Javascript, React environment, MongoDb and NodeJs. However, I want to get my hands dirty, and I want to work on real-world projects. I got an email from the school about the CoronaSafe Network and I quickly applied. After finishing the assignment I got chosen for the interview. As it was my first interview I was very nervous. Jasim took my interview and he was excessively amicable to the point that I forgot It was the interview. On 14 Jan, the selected student list was announced and I was stunned! I got chosen for the fellowship. Out of 50,000+applicants, only 24 students were selected and I was one of them. After smooth onboarding, we began to work on the ARIKE project. Sharing your ideas with team members and understanding other's opinions is only possible if you work in a team environment. I learned the software development process, how to organize your code, got real-world experience of Typescript and React projects. I learned to optimize code and much more. The main thing I like about fellowship is you don't have to compromise your academics. This is what I was expecting from the fellowship. Coronsafe Fellowship was above my expectations. Coronasafe Engineering Fellowship is one of the best things that happened to my software developer journey. Smooth onboarding, friendly mentors, everything is just perfect. It was a nice experience working with industry experts.",
    imageSrc: "/people/swapnil_jagtap.jpg",
  },
  {
    name: "Samyuktha Ganeshkumar",
    batch: "(CEF Batch #1)",
    testimony:
      "Before joining the fellowship, all I knew was to code in a few languages but if asked to develop an entire web app on my own, I would have probably passed on the opportunity. Even with so many tutorials online, I often get confused about where to start and what topics are worth learning. That is when I chanced upon this fellowship and decided to give it a shot. I saw the coding assignment given to us as an opportunity to build a project for my Github profile and I even took the risk of coding in a language that I had only learnt for three months then. One thing led to the other and I am super grateful to have been selected for this fellowship! The 10-week training that we had, opened me up to the world of web development which I probably would not have explored without the motivation and sense of community I experienced from my mentors and peers. With a well-defined curriculum, we were encouraged to ask doubts no matter how small they were and I loved how we were pushed to explore concepts beyond the material given. Pointers on how programming in the tech industry should be done were immensely helpful and have changed the way I think while writing code. My first ever web app and first-ever pull request for an open-source project are only a few of many opportunities that this fellowship has created for me and I couldn't have asked for more!",
    imageSrc: "/people/Samyukyha.png",
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
              testimony={testimonial.testimony}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </SectionWithHeading>
    </div>
  );
}
