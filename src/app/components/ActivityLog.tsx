"use client";

import React from 'react';

const activities = [
  {
    description: 'Abdul Moiz marked “Website Design Project“ as completed',
    time: '2025-01-22 10:00 AM',
  },
  {
    description: 'Abdul Moiz marked “Website Design Project“ as completed',
    time: '2025-01-22 10:15 AM',
  },
  {
    description: 'Abdul Moiz marked “Website Design Project“ as completed',
    time: '2025-01-22 10:30 AM',
  },
  {
    description: 'Abdul Moiz marked “Website Design Project“ as completed',
    time: '2025-01-22 10:45 AM',
  },
  {
    description: 'Abdul Moiz marked “Website Design Project“ as completed',
    time: '2025-01-22 10:45 AM',
  },
];

const ActivityLog = () => {
  return (
    <div className="w-full md:w-[40%] h-96 overflow-y-auto space-y-6 p-4 shadow-lg rounded-lg bg-white">
      <h3 className="font-bold mb-4 text-xl">Activity</h3>
      <ul className="relative border-l-2 border-dotted border-gray-300">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="relative pl-8 mb-3 last:mb-0"
          >
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px]"></div>
            <p className="text-base text-gray-800">{activity.description}</p>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
