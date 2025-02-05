'use client';

import { motion } from 'framer-motion'; // Importing framer-motion for animations (for smooth entry/exit effects)
import { useEffect, useState } from 'react'; // React hooks for managing state and side effects (like window unload events)
import { v4 as uuidv4 } from 'uuid'; // Importing uuid to generate unique user IDs for data

// Defining the structure of the UserData object
interface UserData {
  id: string; // Unique ID for each user (generated if not already present)
  name: string; // User's name
  address: string; // User's address
  email: string; // User's email address
  phone: string; // User's phone number
}

export default function UserDataForm() {
  // Check if there is any existing user data in localStorage
  const storedData = localStorage.getItem('userData');

  // Initialize userData with either the existing localStorage data or default values (generated ID)
  const initialData: UserData = storedData
    ? JSON.parse(storedData) // Parse the stored data if found
    : { id: uuidv4(), name: '', address: '', email: '', phone: '' }; // Default user data

  // State for storing user input form data (name, address, etc.)
  const [userData, setUserData] = useState<UserData>(initialData);

  // State to track if the form has unsaved changes
  const [isUnsavedChanges, setIsUnsavedChanges] = useState(false);

  // Effect hook to handle the "beforeunload" event (warning if user tries to leave without saving)
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isUnsavedChanges) {
        e.preventDefault(); // Prevent the default behavior (leaving the page)
        e.returnValue = ''; // Show a warning dialog when trying to leave
      }
    };

    // Attach the event listener on component mount
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove event listener when the component unmounts
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isUnsavedChanges]); // This effect depends on the `isUnsavedChanges` state

  // Handler for form input changes (name, address, etc.)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from the input event

    // Update userData state with new input values (using object spread to preserve other fields)
    setUserData((prev) => ({ ...prev, [name]: value }));

    // Mark the form as having unsaved changes
    setIsUnsavedChanges(true);
  };

  // Handler to save user data to localStorage
  const handleSave = () => {
    // Save the current user data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Mark the form as having no unsaved changes
    setIsUnsavedChanges(false);

    // Trigger an update (optional: use `window.dispatchEvent` to force re-fetch or notify other components)
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 justify-between">
      {/* User Data Form Card with motion animation for smooth transition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state (slightly off-screen with low opacity)
        animate={{ opacity: 1, y: 0 }} // Final state (fully visible and in place)
        transition={{ duration: 0.5 }} // Transition settings (smooth 0.5s animation)
        className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full md:w-1/2 shadow-md"
      >
        <h2 className="text-white text-lg font-semibold mb-4">User Data</h2>

        <div className="space-y-4">
          <div className="text-gray-400 text-sm">UserData.JSON object</div>

          {/* Input field for user name */}
          <input
            type="text"
            name="name" // Name of the field (mapped to state property)
            value={userData.name} // Controlled component with value bound to state
            onChange={handleChange} // Call handleChange on input change
            placeholder="Enter your name" // Placeholder text when input is empty
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-gray-400 text-sm">ID: {userData.id}</div>

          {/* Save button to persist data to localStorage */}
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Save
          </button>
        </div>
      </motion.div>

      {/* Contact Info Form Card with motion animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.5, delay: 0.2 }} // Slight delay for animation
        className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full md:w-1/2 shadow-md"
      >
        <h2 className="text-white text-lg font-semibold mb-4">Contact Info</h2>

        <div className="space-y-4">
          {/* Input for address */}
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Input for email */}
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Input for phone */}
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Save button for the second form */}
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}
