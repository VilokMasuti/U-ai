import { Card, CardBody, CardHeader } from '@heroui/react'; // Importing Card components for layout
import type React from 'react'; // Importing React type for TypeScript support
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'; // Importing chart components from Recharts for rendering charts
import { useChartData } from '../hooks/useChartData'; // Custom hook to fetch chart data

const UserProfileChart: React.FC = () => {
  // Fetching chart data using the custom hook
  const chartData = useChartData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Counter Trend Chart */}
      <Card className="w-full">
        {/* Card Header with title and description */}
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Counter History</h4>{' '}
          {/* Title of the chart */}
          <small className="text-default-500">
            Real-time trend (updates every 5s) {/* Description for the chart */}
          </small>
        </CardHeader>
        {/* Card Body with chart */}
        <CardBody>
          {/* ResponsiveContainer ensures that the chart adapts to different screen sizes */}
          <ResponsiveContainer width="100%" height={300}>
            {/* AreaChart is used for showing a smooth line chart */}
            <AreaChart data={chartData}>
              {/* CartesianGrid adds grid lines to the chart */}
              <CartesianGrid strokeDasharray="3 3" />
              {/* XAxis defines the axis for the time or timestamps */}
              <XAxis dataKey="timestamp" />
              {/* YAxis defines the axis for the values */}
              <YAxis />
              {/* Tooltip is used to show additional information on hover */}
              <Tooltip />
              {/* Area chart to plot the data with a smooth curve */}
              <Area
                type="monotone" // Monotone type ensures a smooth curve
                dataKey="count" // The data to be plotted on the Y-axis
                stroke="#8884d8" // Line color
                fill="#8884d8" // Fill color for the area
                fillOpacity={0.3} // Transparency of the area fill
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* User Interactions Chart */}
      <Card className="w-full">
        {/* Card Header with title and description */}
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">User Interactions</h4>{' '}
          {/* Title of the chart */}
          <small className="text-default-500">
            Real-time activity overview {/* Description of the chart */}
          </small>
        </CardHeader>
        {/* Card Body with chart */}
        <CardBody>
          {/* ResponsiveContainer ensures that the chart adapts to different screen sizes */}
          <ResponsiveContainer width="100%" height={300}>
            {/* BarChart is used to display bar charts */}
            <BarChart data={chartData}>
              {/* CartesianGrid adds grid lines to the chart */}
              <CartesianGrid strokeDasharray="3 3" />
              {/* XAxis defines the axis for the time or timestamps */}
              <XAxis dataKey="timestamp" />
              {/* YAxis defines the axis for the values */}
              <YAxis />
              {/* Tooltip is used to show additional information on hover */}
              <Tooltip />
              {/* Legend provides a key for understanding the chart data */}
              <Legend />
              {/* Bar represents the interactions data */}
              <Bar dataKey="interactions" fill="#82ca9d" />{' '}
              {/* Bar for interactions data */}
              {/* Another Bar representing profileViews data */}
              <Bar dataKey="profileViews" fill="#ffc658" />{' '}
              {/* Bar for profile views */}
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserProfileChart;
