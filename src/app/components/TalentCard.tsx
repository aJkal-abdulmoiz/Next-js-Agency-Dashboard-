"use client";

import React from "react";

// Mock data
const talentsData = [
  {
    name: "Orlando Diggs",
    hiredDate: "22 Jan 2025",
    totalWorkingHours: 44,
    imageUrl: "https://th.bing.com/th/id/OIP.TnalbNc46_Vr8TT_dq0zTwHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Jane Smith",
    hiredDate: "18 Mar 2025",
    totalWorkingHours: 90,
    imageUrl: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Mark Taylor",
    hiredDate: "28 Dec 2024",
    totalWorkingHours: 150,
    imageUrl: "https://th.bing.com/th/id/OIP.Ntwccxljc9Gmka_Y6InYMAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const TalentCard: React.FC = () => {
  return (
    <div className="w-full md:w-[50%] h-auto space-y-6 p-6 shadow-lg rounded-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Active Talents</h2>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          View All
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 bg-gray-50 p-4 font-medium text-gray-700">
        <span>Name</span>
        <span>Hired Date</span>
        <span>Total Working Hours</span>
      </div>

      {/* Talent Rows */}
      <div className="space-y-4">
        {talentsData.map((talent, index) => (
          <div
            key={index}
            className="grid grid-cols-3 md:grid-cols-3 items-center gap-4 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Name & Image */}
            <div className="flex items-center gap-4">
              <img
                src={talent.imageUrl}
                alt={talent.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium">{talent.name}</span>
            </div>

            {/* Hired Date */}
            <span>{talent.hiredDate}</span>

            {/* Total Working Hours */}
            <span>{talent.totalWorkingHours} hrs</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentCard;
