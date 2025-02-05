// Importing required components and hooks
import { Card, CardBody } from '@heroui/react'; // Components for Card structure
import React, { Suspense, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Importing Quill editor's styling
import { animated, useSpring } from 'react-spring'; // Animation utilities for spring animations

// Dynamically import ReactQuill to avoid SSR issues (server-side rendering)
// Lazy load the ReactQuill component
const ReactQuill = React.lazy(() => import('react-quill'));

// Define the UserData interface for the structure of the user data

// Animated Card using react-spring's animated component
const AnimatedCard = animated(Card);

// Main RichTextEditor component accepts user data as a prop
export default function RichTextEditor() {
  const [content, setContent] = useState(''); // State to store editor content

  // Spring animation for card entrance (fade and slide effect)
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' }, // Initial state
    to: { opacity: 1, transform: 'translateY(0px)' }, // End state
    config: { tension: 250, friction: 50 }, // Animation configuration
  });

  // Configuration for the toolbar options of the Quill editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }], // Header size options
      ['bold', 'italic', 'underline'], // Formatting options
      [{ list: 'ordered' }, { list: 'bullet' }], // List options
      ['clean'], // Clear formatting button
    ],
  };

  // Effect to initialize the editor content with user data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      setContent(
        `<h2 class="text-lg font-bold">Rich Text Editor</h2>
         <p><strong>Name:</strong> ${userData.name || ''}</p>
         <p><strong>Address:</strong> ${userData.address || ''}</p>
         <p><strong>Email:</strong> ${userData.email || ''}</p>
         <p><strong>Phone:</strong> ${userData.phone || ''}</p>`
      );
    }
  }, []); // Runs only once after initial render to fetch data from localStorage

  // Effect to listen for changes in localStorage and update the editor content accordingly
  useEffect(() => {
    const handleStorageChange = () => {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const userData = JSON.parse(storedData);
        setContent(
          `<h2 class="text-lg font-bold">Rich Text Editor</h2>
           <p><strong>Name:</strong> ${userData.name || ''}</p>
           <p><strong>Address:</strong> ${userData.address || ''}</p>
           <p><strong>Email:</strong> ${userData.email || ''}</p>
           <p><strong>Phone:</strong> ${userData.phone || ''}</p>`
        );
      }
    };

    // Add event listener to listen to changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []); // Runs only once to set up the event listener

  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <AnimatedCard
        style={animation} // Applying the spring animation to the card
        className=" h-[350px] w-full max-w-lg rounded-lg bg-opacity-10 border border-white/20 backdrop-blur-md "
      >
        <CardBody>
          <div className="h-[350px]  [&_.ql-toolbar]:border-white/20 [&_.ql-container]:border-white/20 [&_.ql-editor]:text-white">
            {/* React Quill editor with dynamic content */}
            <ReactQuill
              theme="snow" // Applying the 'snow' theme for the editor
              value={content} // Binding content state to editor
              onChange={setContent} // Updating content state on changes in editor
              modules={modules} // Passing toolbar configuration
            />
          </div>
        </CardBody>
      </AnimatedCard>
    </Suspense>
  );
}
