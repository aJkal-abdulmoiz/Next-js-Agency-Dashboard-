import React, { useState } from 'react';
import TimeDetails from './TimeDetails';
import TimeChart from './TimeChart';

const TimeTracking: React.FC = () => {
  const [selectedTalent, setSelectedTalent] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('2025');

  const handleTalentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTalent(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const unbilledHours = '08:00:15';
  const unbilledAmount = 1589.00;
  const billedHours = '08:00:15';
  const billedAmount = 2589.00;

  return (
    <div className="w-full md:w-[60%] h-auto md:h-96 space-y-4 p-6 shadow-lg rounded-lg bg-white">
      <div className='flex flex-row justify-between'>
        <div>
        <h2 className="text-2xl font-semibold mb-4">Time Tracking</h2>
        </div>
         
      <div className="flex gap-4">
        <div>
          <select
            id="talent"
            value={selectedTalent}
            onChange={handleTalentChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="all">All Talents</option>
            <option value="talent1">Talent 1</option>
            <option value="talent2">Talent 2</option>
            <option value="talent3">Talent 3</option>
          </select>
        </div>

        <div>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
        
      </div>
     

      <TimeDetails
        unbilledHours={unbilledHours}
        unbilledAmount={unbilledAmount}
        billedHours={billedHours}
        billedAmount={billedAmount}
      />

      <div className="mt-2">
        <div className="w-full h-48">
          <TimeChart />
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;
