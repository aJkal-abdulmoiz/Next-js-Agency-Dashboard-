import React from 'react';
import { FaPlus, FaUserPlus, FaFolderPlus, FaFileAlt } from 'react-icons/fa';

const Button = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex-col bg-off-white border border-gray-300 rounded-lg px-8 py-6 flex items-center gap-6 hover:bg-gray-100 transition duration-200 ease-in-out"
  >
    <span className="text-blue-500 text-2xl">{icon}</span> 
    <span className="text-gray-800 font-semibold text-md">{text}</span>
  </button>
);

const App = () => (
  <div className="w-full md:w-[40%] h-auto lg:h-80 space-y-2 p-3 pt-4 shadow-lg rounded-lg bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Button
        text="Post a Job"
        icon={<FaPlus size={30} color="#015FFE" />}
        onClick={() => console.log('Post a Job')}
      />
      <Button
        text="Hire a Talent"
        icon={<FaUserPlus size={30} color="#015FFE" />}
        onClick={() => console.log('Hire a Talent')}
      />
      <Button
        text="Create a Project"
        icon={<FaFolderPlus size={30} color="#015FFE" />}
        onClick={() => console.log('Create a Project')}
      />
      <Button
        text="Draft Proposal"
        icon={<FaFileAlt size={30} color="#015FFE" />}
        onClick={() => console.log('Draft Proposal')}
      />
    </div>
  </div>
);

export default App;
