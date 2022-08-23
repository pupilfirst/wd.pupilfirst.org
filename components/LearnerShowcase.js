const learners = [
	{
		name: "Peeyush",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Abhinandan",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Peeyush",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Abhinandan",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Peeyush",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
	{
		name: "Abhinandan",
		batch: "(CEF Batch #1)",
		imgSrc: "/people/avishek_photo.jpeg",
	},
];

const Learner = ({ name, batch, imgSrc }) => {
	return (
		<div className="flex gap-4 bg-gray-800 p-4 rounded-md text-white">
			<div className="w-14 h-14 object-contain overflow-hidden rounded-full">
				<img src={imgSrc} alt={"Photo of" + name} />
			</div>
			<div>
				<p className="font-semibold">{name}</p>
				<p className="text-sm text-gray-300">{batch}</p>
			</div>
		</div>
	);
};

export default function LearnerShowcase() {
	return (
		<div>
			<div className="p-6 bg-gray-600 rounded-lg">
				<div className="flex items-center justify-between pb-4 text-white flex-wrap">
					<div className="flex gap-2 items-center">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<p className="text-lg font-semibold">Learner showcase</p>
					</div>
					<div className="hidden sm:flex items-center gap-2 ">
						<p>
							<a className="underline hover:text-indigo-200" href="">
								See all learners
							</a>
						</p>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 16L16 12L12 8M8 12H16"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					{learners.map((learner) => (
						<Learner
							name={learner.name}
							batch={learner.batch}
							imgSrc={learner.imgSrc}
						/>
					))}
				</div>
				<div className="flex sm:hidden text-white items-center gap-2 mt-4 ">
						<p>
							<a className="underline hover:text-indigo-200" href="">
								See all learners
							</a>
						</p>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 16L16 12L12 8M8 12H16"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
			</div>
		</div>
	);
}
