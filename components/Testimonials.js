import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
	{
		name: "Peeyush",
		batch: "	(CEF Batch #1)",
		testimony:
			"This is my first ever experience working in production. The happiness you get by making tools that help others and creates value in other people’s lives is unmatching. The freedom to do things, understanding the problem that others face on ground, the responsibility of delivering work with utmost accuracy, discussing solutions with brilliant peers and mentors, I have really grown a lot in the past 6 months",
		imageSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Abhinandan",
		batch: "	(CEF Batch #1)",
		testimony:
			"This is my first ever internship. This is my first open source project and it's been a dream to contribute. I haven't been part of such a big open source project. In this internship, I explored web tech for the first time in the fellowship. Previously, I only had experience in Android. I learned a lot especially in the internship as I experienced meaningful work and found new friends",
		imageSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Sandra",
		batch: "	(CEF Batch #1)",
		testimony:
			"I just had very basic programming skills and had not worked on any web development projects prior to the internship. It was during this internship, that got to learn a lot and that too in a few months. I could work on real production projects. I was able to team up with other interns, and could contribute code that could create real life impact ",
		imageSrc: "/people/avishek_photo.jpeg",
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
