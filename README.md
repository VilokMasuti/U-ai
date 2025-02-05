User Profile Dashboard with Real-Time Charts



Features
Real-Time Data Updates: The charts display real-time data that updates every 5 seconds, simulating user interactions and profile views.
Interactive Charts: Two types of charts:
Counter History Chart: Displays the number of occurrences of an event over time.
User Interactions Chart: Displays user interactions (like clicks, comments, etc.) and profile views.
Responsive Layout: The application layout is fully responsive, ensuring it looks great on both mobile and desktop devices.

Tech Stack
React: Used for building the frontend UI and components.
TypeScript: Provides static type checking to reduce runtime errors and enhance the developer experience.
Tailwind CSS: A utility-first CSS framework for responsive and clean design.
Recharts: A charting library used to render charts for data visualization.
React Hooks: (useState, useEffect) for state management and side-effects handling.
UI-Library: HERO UI (Next UI) for styled components and layout.

src/
  ├── components/
  │   ├── UserProfileChart.tsx        # Displays real-time charts
  │   ├── UserStartCard.tsx          # Card showing user stats
  │   ├── Counter.tsx                # Event counter for user interactions
  │   ├── UserDart.tsx               # A component for displaying user-related data
  │   ├── RichTextEditor.tsx         # Rich Text Editor for user data
  ├── hooks/
  │   ├── useChartData.ts            # Custom hook for fetching and updating chart data
  ├── page/
  │   ├── Dashboard/
  │   │   ├── Main.tsx              # Main dashboard page
  ├── styles/
  │   ├── tailwind.config.js         # Tailwind configuration for styling
  ├── App.tsx                        # Root application component
  ├── index.tsx                      # Entry point for the React app
  └── ...                            # Additional components and utilities

