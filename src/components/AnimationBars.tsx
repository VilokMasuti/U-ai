

// Importing react-spring for animations
import { animated, useSpring } from 'react-spring';

export default function AnimationBars() {
  // Configuration for the animation of the bars
  const barConfig = {
    from: { width: '0%' }, // Initial state: width 0%
    to: { width: '100%' }, // End state: width 100%
    config: { tension: 280, friction: 60 }, // Animation tension and friction for smooth movement
  };

  // Three bars with staggered animation delays
  const barAnimation1 = useSpring(barConfig); // First bar, no delay
  const barAnimation2 = useSpring({ ...barConfig, delay: 200 }); // Second bar with 200ms delay
  const barAnimation3 = useSpring({ ...barConfig, delay: 400 }); // Third bar with 400ms delay

  return (
    <div className="absolute bottom-[-105PX] left-1/2 transform -translate-x-1/2 w-[100%] space-y-2 p-4">
      {/* Animated divs for each bar */}
      <animated.div
        style={barAnimation1} // First animated bar
        className="h-2 bg-white rounded-full opacity-20"
      />
      <animated.div
        style={barAnimation2} // Second animated bar
        className="h-2 bg-white rounded-full opacity-40"
      />
      <animated.div
        style={barAnimation3} // Third animated bar
        className="h-2 bg-white rounded-full opacity-60"
      />
    </div>
  );
}
