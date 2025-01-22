import React, { useState } from 'react';
import { Card, CardContent } from '../shared/Card';
import { TrendingDown, Users, Briefcase } from 'lucide-react';

const mockData = {
  overview: {
    paidInvoice: 1000,
    pendingInvoice: 100,
    activeTalents: 5,
    activeProjects: 10,
  }
};

const SparkLine = ({ color }:any) => (
  <svg className="w-full h-12" viewBox="0 0 100 50">
    <polyline
      points={Array(10).fill(0).map((_, i) => 
        `${(100/10)*i},${25 + (Math.random()*20-10)}`).join(' ')}
      fill="none"
      stroke={color === 'red' ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)'}
      strokeWidth="1.5"
      className="opacity-50"
    />
  </svg>
);

const Overview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');

  const handleSelectChange = (value: string) => {
    setSelectedPeriod(value);
  };

  const cards = [
    {
      title: 'Paid Invoice',
      value: `$${mockData.overview.paidInvoice.toFixed(2)}`,
      change: -14,
      icon: <TrendingDown className="h-4 w-4 text-red-500" />,
      color: 'red'
    },
    {
      title: 'Pending Invoice',
      value: `$${mockData.overview.pendingInvoice.toFixed(2)}`,
      change: -14,
      icon: <TrendingDown className="h-4 w-4 text-red-500" />,
      color: 'red'
    },
    {
      title: 'Active Talents',
      value: String(mockData.overview.activeTalents).padStart(2, '0'),
      change: 14,
      icon: <Users className="h-4 w-4 text-green-500" />,
      color: 'green'
    },
    {
      title: 'Active Projects',
      value: String(mockData.overview.activeProjects).padStart(2, '0'),
      change: 14,
      icon: <Briefcase className="h-4 w-4 text-green-500" />,
      color: 'green'
    }
  ];



  return (
    <div className="w-full md:w-[60%] h-auto md:h-80 space-y-2 p-6 shadow-lg rounded-lg bg-white">
      <div className='flex flex-row justify-between'>
        <div>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        </div>
         
      <div className="flex gap-4">
        <div>
          <select
            id="talent"
            value={selectedPeriod}
            onChange={handleSelectChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="all">This Month</option>
            <option value="talent1">May</option>
            <option value="talent2">June</option>
            <option value="talent3">July</option>
          </select>
        </div>
      </div>
        
      </div>
      
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {cards.map((card, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{card.title}</p>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold">{card.value}</h3>
                <p className={`pb-11 text-sm ${card.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {card.change > 0 ? '+' : ''}{card.change}% from last month
                </p>
                <SparkLine  color={card.color} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Overview;
