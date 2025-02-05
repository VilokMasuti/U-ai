'use client';

import { Button, Card, CardBody } from '@heroui/react'; // Importing components from @heroui for UI elements
import { useState } from 'react'; // React hook for managing state
import { animated, useSpring } from 'react-spring'; // Importing animations for smooth UI effects

const AnimatedCard = animated(Card); // Wrapping Card component with animated functionality for smooth transitions

export default function Counter() {
  // useState hook to manage the current count state, starting at 2
  const [count, setCount] = useState(2);

  // useSpring hook to create dynamic animations based on the current count
  const { height, backgroundColor } = useSpring({
    height: `${Math.min(100, Math.abs(count) * 5)}%`, // Height dynamically changes based on count
    backgroundColor: `hsl(${count * 10}, 70%, 60%)`, // Background color changes as count increases
    config: { tension: 280, friction: 60 }, // Custom configuration for smoothness and bounce
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-[350px] w-full">
      {/* Animated background with dynamic height and color */}
      <animated.div
        className="absolute bottom-0 w-full rounded-lg"
        style={{ height, backgroundColor }} // Applying spring styles to the background
      />

      {/* Animated Card with backdrop blur and semi-transparent background */}
      <AnimatedCard className="relative z-10 w-[90%] max-w-md rounded-lg bg-opacity-20 border border-white/20 backdrop-blur-md p-6">
        <CardBody className="text-white text-center">
          <div className="text-2xl font-semibold mb-2">{count}</div>
          <div className="text-lg text-gray-300 mb-4">Counter</div>

          {/* Buttons to increment, reset, or decrement the count */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setCount((c) => c + 1)} // Increment count by 1
              className="px-5 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
            >
              +
            </Button>
            <Button
              onClick={() => setCount(0)} // Reset count to 0
              className="px-5 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
            >
              Reset
            </Button>
            <Button
              onClick={() => setCount((c) => c - 1)} // Decrement count by 1
              className="px-5 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
            >
              -
            </Button>
          </div>
        </CardBody>
      </AnimatedCard>
    </div>
  );
}
