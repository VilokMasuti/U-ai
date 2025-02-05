import type React from 'react';

import { animated, useSpring } from 'react-spring';

import UserProfileChart from '../components/UserProfileChart';
import UserStatsCards from '../components/UserStatsCards';

const Dashboard: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: {
      tension: 280,
      friction: 60,
      easing: (t) => t * t * (3 - 2 * t),
    },
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto p-4 space-y-6">
      {/* Stats Cards */}
      <UserStatsCards />

      {/* Charts */}
      <UserProfileChart />
    </animated.div>
  );
};

export default Dashboard;
