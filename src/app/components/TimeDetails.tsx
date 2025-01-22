import React from 'react';

interface TimeDetailsProps {
  unbilledHours: string;
  unbilledAmount: number;
  billedHours: string;
  billedAmount: number;
}

const TimeDetails: React.FC<TimeDetailsProps> = ({
  unbilledHours,
  unbilledAmount,
  billedHours,
  billedAmount,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-[30%] p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium">Unbilled Hours</h3>
        <p className="text-lg font-bold">{unbilledHours}</p>
        
      </div>
      <div className="w-[30%] p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium">Unbilled Amount</h3>
        <p className="text-lg font-bold">${unbilledAmount}</p>
      </div>

      <div className="w-[30%] p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium">Billed Hours</h3>
        <p className="text-lg font-bold text-green-700">{unbilledHours}</p>
      </div>
      <div className="w-[30%] p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium">Billed Amount</h3>
        <p className="text-lg font-bold text-green-700">${billedAmount}</p>
      </div>
    </div>
    
  );
};

export default TimeDetails;
