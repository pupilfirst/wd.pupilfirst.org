import React from "react";

let timelineList = [
  {
    date: "07 November 2023",
    event:
      "Application Open for LITE Minor Degree and Open Elective WD10Y23 cohort",
  },
  {
    date: "07 November 2023 onwards",
    event: "Student onboarding to WD 101",
  },
  {
    date: "16 November 2023",
    event: "Deadline for submission of application",
  },
  {
    date: "21 November 2023",
    event:
      "Deadline for students to complete WD 101 course to get onboarded for WD 201 course",
  },
  {
    date: "22 November 2023",
    event: "Commencement of WD201 course for students who complete WD101",
  },
  {
    date: "16 January 2024",
    event: "Deadline for students to complete WD 201 course",
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
