import React, { useEffect, useState } from 'react';
import { getUserData } from '../../libs/mockUserAPI';

const Greet: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = await getUserData();
        setUserName(user.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserName();
  }, []);

  if (!userName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Welcome back, {userName}</h2>
      <p className="text-base text-gray-500">Hire, track, and manage your talents and projects.</p>
    </div>
  );
};

export default Greet;
