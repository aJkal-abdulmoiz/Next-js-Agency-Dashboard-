"use client"


import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OverviewCard from '../components/OverviewCard';
import TalentCard from '../components/TalentCard';
import ProjectCard from '../components/ProjectCard';
import ActivityLog from '../components/ActivityLog';
import { getMockData } from '../../libs/mockData';
import Greet from '../components/Greet';
import Controls from '../components/Controls';
import TimeTracking from './../components/TimeTracking';

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getMockData().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className='p-4'>
        <Greet/>
        <section className="flex flex-col md:flex-row justify-between gap-4 pt-3">
          <OverviewCard />
          <Controls/>
        </section>

        <section className="flex flex-col md:flex-row justify-between gap-4 pt-3">
          <TalentCard/>
          <ProjectCard />
        </section>
        
        <section className="flex flex-col md:flex-row justify-between gap-4 pt-3">
          <TimeTracking/>
          <ActivityLog />
        </section>




        
      </div>
      
    </>
  );
};

export default DashboardPage;
