import { useEffect, useState } from 'react'; // Importing hooks from React for state and side-effects

// Defining the structure of the chart data using TypeScript interfaces
interface ChartData {
  timestamp: string; // The timestamp of the data, representing the day of the week
  count: number; // The number of occurrences of an event or action (e.g., counter value)
  interactions: number; // The number of interactions (e.g., clicks, likes, comments)
  profileViews: number; // The number of profile views (e.g., views of a user's profile)
}

// Custom hook to manage and update the chart data
export const useChartData = () => {
  // useState hook to initialize and manage the chart data as an array of ChartData objects
  const [data, setData] = useState<ChartData[]>([]);

  // useEffect hook to manage side-effects such as fetching or updating data
  useEffect(() => {
    // Step 1: Initialize data with a generated dataset for the week
    const initialData = generateWeekData(); // Generate the initial set of data for the week
    setData(initialData); // Set the generated data to the state

    // Step 2: Set up a recurring interval to update the data every 5 seconds
    const interval = setInterval(() => {
      // Updating the chart data on every interval (5 seconds)
      setData((prevData) => {
        // Step 3: Copy the previous data to preserve immutability
        const newData = [...prevData];

        // Step 4: Update the last data point (representing the most recent day) with random fluctuations
        const lastIndex = newData.length - 1; // Get the index of the last data point (last day)

        // Randomly change the data of the last data point (simulate real-time fluctuation)
        newData[lastIndex] = {
          ...newData[lastIndex], // Copy the previous day's data
          count: Math.max(0, newData[lastIndex].count + Math.random() * 4 - 2), // Fluctuate the count value by a random amount
          interactions: Math.max(
            0,
            newData[lastIndex].interactions + Math.random() * 8 - 4
          ), // Fluctuate the interactions value
          profileViews: Math.max(
            0,
            newData[lastIndex].profileViews + Math.random() * 6 - 3
          ), // Fluctuate the profile views value
        };

        // Step 5: Return the updated data
        return newData;
      });
    }, 5000); // The interval runs every 5000ms (5 seconds)

    // Step 6: Clean up the interval when the component is unmounted or when the effect runs again
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Return the current state of the data
  return data;
};

// Helper function to generate random data for a week
function generateWeekData(): ChartData[] {
  // Array of days representing a week's days (used as timestamps)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Step 1: Map through the days of the week and generate random values for each day
  return days.map((day) => ({
    timestamp: day, // Set the day as the timestamp (e.g., "Mon", "Tue")
    count: Math.floor(Math.random() * 15) + 5, // Generate a random count value between 5 and 20
    interactions: Math.floor(Math.random() * 50) + 20, // Generate a random interactions value between 20 and 70
    profileViews: Math.floor(Math.random() * 30) + 10, // Generate a random profile views value between 10 and 40
  }));
}
