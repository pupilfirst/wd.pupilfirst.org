import React from "react";

let timelineList = [
  {
    date: "23 February 2023",
    event:
      "Application Open for LITE Minor Degree and Open Elective Batch 2 2023",
  },
  {
    date: "From 23 February 2023 onwards",
    event: "Student onboarding for Batch 2 2023",
  },
  {
    date: "9 March 2023",
    event: "Deadline for submission of application for WD02Y23",
  },
  {
    date: "14 March 2023",
    event:
      "Deadline for students to complete WD 101 course to get onboarded for WD 201 course",
  },
  {
    date: "15 March 2023",
    event: "Final onboarding to WD201 course for students who complete WD101",
  },
  {
    date: "24 May 2023",
    event: "Deadline for students to complete WD 201 course",
  },
  {
    date: "14 June 2023",
    event: "Deadline for students to submit the WD201 final capstone project",
  },
];

const TimelineItem = ({ date, event }) => {
  return (
    <div className="grid md:grid-cols-4 text-white">
      <p className="col-span-1 py-2 md:py-4 pr-4 text-gray-400">{date}</p>
      <p className="col-span-3 p-4 pt-0 pl-0 md:pl-8 md:pt-4 border-b md:border-l md:border-b-0 border-gray-700">
        <span>•</span> {event}
      </p>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="py-8 md:12">
      <div className="hidden md:block">
        <div className="grid md:grid-cols-4 text-gray-400 border-b border-gray-700">
          <p className="col-span-1 py-4 pr-4 uppercase">Timeline</p>
          <p className="col-span-3 p-4 pl-0 md:pl-8 border-b md:border-l md:border-b-0 border-gray-700 uppercase">
            Events
          </p>
        </div>
      </div>
      {timelineList.map((timelineItem, index) => (
        <TimelineItem
          key={index}
          date={timelineItem.date}
          event={timelineItem.event}
        />
      ))}
    </div>
  );
}
