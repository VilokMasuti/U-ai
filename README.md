User Profile Dashboard with Real-Time Charts



Features
Real-Time Data Updates: The charts display real-time data that updates every 5 seconds, simulating user interactions and profile views.
Interactive Charts: Two types of charts:
Counter History Chart: Displays the number of occurrences of an event over time.
User Interactions Chart: Displays user interactions (like clicks, comments, etc.) and profile views.
Responsive Layout: The application layout is fully responsive, ensuring it looks great on both mobile and desktop devices.

Tech Stack
React: For building the frontend UI and components.
TypeScript: For static type checking, ensuring better developer experience and fewer runtime errors.
Tailwind CSS: For utility-first, responsive design.
Recharts: A charting library used to render charts for data visualization.
React Hooks (useState, useEffect): For managing state and handling side-effects in the app.
UI-Library-Next Ui - (HERO UI)


Component Structure
src/
  ├── components/
   ├── UserProfileChart.tsx
    ├── UserStartCard.tsx
    ├── Counter.tsx
│   ├── UserDart.tsx
  ├── RichTextEditor.tsx
  │   └── ...
  ├── hooks/
  │   ├── useChartData.ts
  │   └── ...
  |---- page/
     ├── Dashboard
        ├── Main
  |
  ├── styles/
  │   └── tailwind.config.js
  ├── App.tsx
  ├── index.tsx
  └── ...
