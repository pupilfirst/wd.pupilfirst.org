import SectionWithHeading from "./SectionWithHeading";

const facultyMembers = [
	{
		name: "Dr. John Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Dr. Jane Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Dr. John Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Dr. Jane Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Dr. John Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Dr. Jane Doe",
		imgSrc: "/people/avishek_photo.jpeg",
	},
];

let FacultyMember = ({ name, imgSrc }) => {
	return (
		<div className="flex flex-col items-center">
			<div className="w-32 h-32 rounded-full object-cover overflow-hidden">
				<img
					className="w-32 h-32 rounded-full object-cover overflow-hidden"
					src={imgSrc}
					alt={"Photo of" + name}
				/>
			</div>
			<p className="mt-4 font-semibold text-white">{name} </p>
		</div>
	);
};

export default function PersonalizedLearningExperiece() {
	return (
		<div>
			<SectionWithHeading
				heading="Personalised Learning Experience"
				darkBackground={true}
			>
				<p className="text-white mt-4 w-4/5">
					As a beginner, we expect you to make many mistakes. Get personalised
					guidance from LITE faculty members & student teaching assistants to
					find answers and confidently move ahead.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 py-16">
					{facultyMembers.map((facultyMember) => (
						<FacultyMember
							name={facultyMember.name}
							imgSrc={facultyMember.imgSrc}
						/>
					))}
				</div>
			</SectionWithHeading>
		</div>
	);
}
