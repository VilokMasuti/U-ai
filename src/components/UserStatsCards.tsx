'use client';

import { Card, CardBody } from '@heroui/react';
import { Activity, Clock, TrendingUp, Users } from 'lucide-react';
import type React from 'react';
import { animated, useSpring } from 'react-spring';

// Animated Card component for smooth transitions
const AnimatedCard = animated(Card);

const UserStatsCards: React.FC = () => {
  // Data for each stat card (example values, title, icon, change percentage)
  const stats = [
    {
      title: 'Total Interactions',
      value: '287',
      icon: <Activity className="w-5 h-5" />, // Activity icon from lucide-react
      change: '+4.75%',
      color: 'text-green-500', // Green color for positive change
    },
    {
      title: 'Profile Views',
      value: '185',
      icon: <Users className="w-5 h-5" />, // Users icon
      change: '+2.45%',
      color: 'text-blue-500', // Blue color for profile views
    },
    {
      title: 'Average Time',
      value: '12m',
      icon: <Clock className="w-5 h-5" />, // Clock icon
      change: '+1.25%',
      color: 'text-purple-500', // Purple color for time
    },
    {
      title: 'Engagement Rate',
      value: '64%',
      icon: <TrendingUp className="w-5 h-5" />, // Trending up icon
      change: '+3.15%',
      color: 'text-orange-500', // Orange color for engagement rate
    },
  ];

  // Setting up animation for smooth entry and exit using react-spring
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' }, // Start off-screen with low opacity
    to: { opacity: 1, transform: 'translateY(0px)' }, // Final position with full opacity
    config: { tension: 250, friction: 50 }, // Customize spring configuration for smooth effect
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Loop through stats data and render each card */}
      {stats.map((stat, index) => (
        <AnimatedCard
          key={index}
          style={animation} // Applying animation to each card
          className="w-full"
        >
          <CardBody className="flex flex-row items-center gap-4">
            {/* Icon section with background color */}
            <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
              {stat.icon} {/* Rendering icon dynamically */}
            </div>
            <div>
              <p className="text-sm text-default-500">{stat.title}</p>{' '}
              {/* Displaying the stat title */}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{stat.value}</h3>{' '}
                {/* Displaying stat value */}
                <small className={`${stat.color}`}>{stat.change}</small>{' '}
                {/* Displaying change percentage with color */}
              </div>
            </div>
          </CardBody>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default UserStatsCards;
