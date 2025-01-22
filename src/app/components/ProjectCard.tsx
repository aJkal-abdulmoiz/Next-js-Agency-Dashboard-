"use client";

import React from "react";

const projectData = [
  {
    name: "Website Development",
    description: "Create a website for a startup",
    completed: 18,
    totalTasks: 25,
    team: [
      { name: "Orlando", imgUrl: "https://th.bing.com/th/id/OIP.TnalbNc46_Vr8TT_dq0zTwHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
      { name: "Jane", imgUrl: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ],
  },
  {
    name: "Mobile App Development",
    description: "Develop a mobile app for e-commerce",
    completed: 5,
    totalTasks: 10,
    team: [
      { name: "Mark", imgUrl: "https://th.bing.com/th/id/OIP.TnalbNc46_Vr8TT_dq0zTwHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
      { name: "Lucas", imgUrl: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ],
  },
  {
    name: "Social Media Marketing",
    description: "Plan and execute a social media marketing strategy",
    completed: 10,
    totalTasks: 12,
    team: [
      { name: "Sarah", imgUrl: "https://th.bing.com/th/id/OIP.TnalbNc46_Vr8TT_dq0zTwHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
      { name: "Emily", imgUrl: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ],
  },
];

const ProjectCard: React.FC = () => {
  return (
    <div className="w-full md:w-[50%] lg:w-[50%] h-auto mx-auto space-y-6 p-6 shadow-lg rounded-lg bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-2xl font-semibold">Active Projects</h2>
        <button className="mt-4 md:mt-0 p-2 border border-gray-300 rounded-lg hover:bg-gray-200">
          View All
        </button>
      </div>

      {/* Table Headers */}
      <div className="hidden md:flex flex-row p-4 justify-between items-center px-4 bg-gray-50">
        <h3 className="w-1/3 font-medium">Project</h3>
        <h3 className="w-1/3 font-medium">Teams</h3>
        <h3 className="w-1/3 font-medium">Progress</h3>
      </div>

      {/* Project Data */}
      <div className="space-y-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 rounded-lg shadow-sm"
          >
            {/* Project Info */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>

            {/* Team Members */}
            <div className="w-full md:w-1/3 flex items-center gap-2 mb-4 md:mb-0">
              {project.team.map((member, idx) => (
                <img
                  key={idx}
                  src={member.imgUrl}
                  alt={member.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ))}
              {project.team.length < 5 && (
                <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                  +{5 - project.team.length}
                </div>
              )}
            </div>


            <div className="w-full md:w-1/3">
              <div className="relative flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{
                      width: `${(project.completed / project.totalTasks) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs font-semibold inline-block ml-2 text-blue-600">
                  {project.completed}/{project.totalTasks}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
